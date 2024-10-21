import { useGetPokemon } from "@/hooks/queries/useGetPokemon";
import React from "react";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { Divider } from "../ui/divider";
import { Card } from "../ui/card";
import { Image } from "react-native";
import { Badge, BadgeText } from "../ui/badge";

interface Props {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: Props) => {
  const { data: pokemonData, isLoading } = useGetPokemon(url, name);

  if (isLoading) {
    return (
      <Box className="h-40 w-full p-4">
        <Heading>Loading...</Heading>
      </Box>
    );
  }

  if (pokemonData) {
    return (
      <Card className="m-2 p-4 rounded-lg flex flex-row gap-4">
        <Image
          source={{
            uri: pokemonData.sprites.other?.["official-artwork"].front_default,
          }}
          style={{ width: 150, height: 150 }}
        />
        <Box className="flex gap-4">
          <Heading size="xl">
            {pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1).concat()}
          </Heading>
          <Box className="flex flex-row gap-2">
            {pokemonData.types.map((type) => (
              <Badge
                size="md"
                variant="solid"
                action="success"
                key={type.type.name}
              >
                <BadgeText>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1).concat()}
                </BadgeText>
              </Badge>
            ))}
          </Box>
        </Box>
      </Card>
    );
  }
};

export default PokemonCard;
