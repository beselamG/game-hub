import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface genid {
  id: string | null;
}

function App() {
  const [genreId, setGenreId] = useState({} as genid);
  const [platfrom, setPlatfrom] = useState<string | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList changeGenreId={(id) => setGenreId({ id })} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          handlePlatform={(platform) => setPlatfrom(platform)}
        />
        <GameGrid selectedGenreId={genreId} platform={platfrom} />
      </GridItem>
    </Grid>
  );
}

export default App;
