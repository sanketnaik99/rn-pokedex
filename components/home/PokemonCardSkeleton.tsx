import React from "react";

// Components
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Box } from "../ui/box";

export const PokemonCardSkeleton = () => {
  return (
    <Card className="m-2 p-4 rounded-lg flex flex-row gap-4">
      <Skeleton variant="sharp" className="h-[150px] w-[150px]" />
      <Box className="flex gap-4">
        <Skeleton variant="sharp" className="h-5 w-40" />
        <Box className="flex flex-row gap-2">
          <Skeleton variant="sharp" className="h-6 w-24" />
          <Skeleton variant="sharp" className="h-6 w-24" />
        </Box>
      </Box>
    </Card>
  );
};
