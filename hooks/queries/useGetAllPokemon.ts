import { useQuery } from "@tanstack/react-query";

export interface PaginatedPokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export const useGetAllPokemon = (pageNumber: number) => {
  const query = useQuery<PaginatedPokemonResponse>({
    queryKey: ["pokemon", pageNumber],
    queryFn: async () =>
      fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(pageNumber - 1) * 20}`
      )
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          return err;
        }),
    staleTime: 1000 * 60 * 30,
  });

  return query;
};
