import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { genid } from "../App";

interface Props {
  selectedGenreId: genid | null;
  platform: string | null;
}

export const GameGrid = ({ selectedGenreId, platform }: Props) => {
  const [filteredGames, setFilteredGames] = useState<Game[] | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  const { games, error, isLoading } = useGames(
    selectedGenreId?.id ? selectedGenreId.id : null
  );
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    //setShowFilter(true);
    const filterGames = games.filter((game) =>
      game.parent_platforms.some((plt) => plt.platform.name === platform)
    );
    setFilteredGames(filterGames);
   
    

  }, [platform, games]);
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {(platform === null) &&
          games.map((game) => <GameCard game={game} key={game.id} />)}
        {platform &&
          filteredGames?.map((game) => <GameCard game={game} key={game.id} />)}
      </SimpleGrid>
    </>
  );
};
