import { useGetPokemon } from "@/hooks/queries/useGetPokemon";
import React from "react";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { Divider } from "../ui/divider";

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

  return (
    <Box className="bg-gray-400 w-full min-h-20 p-4 flex justify-center">
      <Heading>{name}</Heading>
      <Heading>{pokemonData?.height}</Heading>
    </Box>
  );
};

export default PokemonCard;
