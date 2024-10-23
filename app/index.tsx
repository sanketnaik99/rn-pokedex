import { useState } from "react";

// Libraries
import { FlatList } from "react-native";

// Components
import { PokemonCard } from "@/components/home/PokemonCard";
import { PokemonCardSkeleton } from "@/components/home/PokemonCardSkeleton";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react-native";

// Hooks
import { useGetAllPokemon } from "@/hooks/queries/useGetAllPokemon";

export default function Index() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data: pokemonData, isLoading } = useGetAllPokemon(pageNumber);

  if (isLoading) {
    return (
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <PokemonCardSkeleton />}
        ItemSeparatorComponent={() => (
          <Box className="py-1">
            <Divider />
          </Box>
        )}
      />
    );
  }

  if (pokemonData) {
    return (
      <Box className="h-full w-full flex items-center justify-center pb-8">
        <FlatList
          data={pokemonData.results}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PokemonCard name={item.name} url={item.url} />
          )}
          style={{ width: "100%" }}
          ItemSeparatorComponent={() => (
            <Box className="py-1">
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
                  setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1)
                }
              >
                <ButtonText>
                  {pageNumber === 1 ? pageNumber : pageNumber - 1}
                </ButtonText>
              </Button>

              <Button
                variant={pageNumber === 1 ? "outline" : "solid"}
                onPress={() =>
                  setPageNumber(pageNumber === 1 ? pageNumber + 1 : pageNumber)
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
    );
  }
}
