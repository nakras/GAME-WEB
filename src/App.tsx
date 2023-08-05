import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 200px",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Box marginTop={"120px"} marginLeft={"15px"}>
          <GameHeading gameQuery={gameQuery} />
        </Box>
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
