// Components
import PokemonCard from "@/components/home/PokemonCard";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { useGetAllPokemon } from "@/hooks/queries/useGetAllPokemon";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react-native";
import { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";

export default function Index() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data: pokemonData, isLoading } = useGetAllPokemon(pageNumber);

  if (isLoading) {
    return (
      <Box className="h-full w-full flex items-center justify-center">
        <Heading>PokeDex</Heading>
        <Text>PokeDex Loading..</Text>
      </Box>
    );
  }

  if (pokemonData) {
    return (
      <SafeAreaView>
        <Box className="h-full w-full flex items-center justify-center">
          <FlatList
            data={pokemonData.results}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <PokemonCard name={item.name} url={item.url} />
            )}
            style={{ width: "100%" }}
            ItemSeparatorComponent={() => (
              <Box className="py-2">
                <Divider />
              </Box>
            )}
            ListFooterComponent={() => (
              <HStack space="sm" className="p-4 justify-center">
                <Button
                  disabled={pageNumber === 1}
                  variant="outline"
                  onPress={() => setPageNumber((prev) => prev - 1)}
                >
                  <ButtonIcon as={ArrowLeftIcon} />
                </Button>

                <Button
                  variant={pageNumber === 1 ? "solid" : "outline"}
                  onPress={() =>
                    setPageNumber(
                      pageNumber === 1 ? pageNumber : pageNumber - 1
                    )
                  }
                >
                  <ButtonText>
                    {pageNumber === 1 ? pageNumber : pageNumber - 1}
                  </ButtonText>
                </Button>

                <Button
                  variant={pageNumber === 1 ? "outline" : "solid"}
                  onPress={() =>
                    setPageNumber(
                      pageNumber === 1 ? pageNumber + 1 : pageNumber
                    )
                  }
                >
                  <ButtonText>
                    {pageNumber === 1 ? pageNumber + 1 : pageNumber}
                  </ButtonText>
                </Button>

                <Button
                  variant="outline"
                  onPress={() =>
                    setPageNumber(
                      pageNumber === 1 ? pageNumber + 2 : pageNumber + 1
                    )
                  }
                >
                  <ButtonText>
                    {pageNumber === 1 ? pageNumber + 2 : pageNumber + 1}
                  </ButtonText>
                </Button>

                <Button
                  variant="outline"
                  onPress={() => setPageNumber((prev) => prev + 1)}
                >
                  <ButtonIcon as={ArrowRightIcon} />
                </Button>
              </HStack>
            )}
          />
        </Box>
      </SafeAreaView>
    );
  }
}
