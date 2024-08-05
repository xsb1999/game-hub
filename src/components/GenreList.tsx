import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { useState } from "react";

interface Props {
  selectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {isLoading && (
        <Box>
          <Spinner />
          <GenreListSkeleton />
        </Box>
      )}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => {
                  selectGenre(genre);
                }}
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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
