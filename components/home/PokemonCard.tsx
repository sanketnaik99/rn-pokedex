import React from "react";

// Libraries
import { Image } from "react-native";

// Hooks
import { useGetPokemon } from "@/hooks/queries/useGetPokemon";

// Components
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { Card } from "../ui/card";
import { Badge, BadgeText } from "../ui/badge";
import { PokemonCardSkeleton } from "./PokemonCardSkeleton";

interface Props {
  name: string;
  url: string;
}

export const PokemonCard = ({ name, url }: Props) => {
  const { data: pokemonData, isLoading } = useGetPokemon(url, name);

  if (isLoading) {
    return <PokemonCardSkeleton />;
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
