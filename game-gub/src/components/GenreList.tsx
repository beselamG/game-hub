import React, { useState } from "react";
import { useGenres } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  changeGenreId: (id: string) => void;
}

const GenreList = ({ changeGenreId }: Props) => {
  const { error, genres, isLoading } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState(-1);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <div>
      <List>
        {genres.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />{" "}
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => {
                  changeGenreId(genre.id.toString());
                  setSelectedGenre(genre.id)
                }}
                fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
