import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  color,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading marginTop={"100px"} fontSize={"5xl"} marginBottom={3}>
        Genres
      </Heading>
      <List position={"absolute"} marginTop="10px">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="15px">
            <HStack>
              <Image
                objectFit={"cover"}
                float={"right"}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={
                  genre.id === selectedGenre?.id ? "extrabold" : "normal"
                }
                color={genre.id === selectedGenre?.id ? "yellow.500" : ""}
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
