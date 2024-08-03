import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  Text,
  SkeletonText,
  Box,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      {Array.from({ length: 20 }).map((_, index) => (
        <Box paddingY="5px" key={index}>
          <ListItem>
            <HStack>
              <Skeleton boxSize="32px" borderRadius={8} />
              <Skeleton height="20px" width="100px" />
            </HStack>
          </ListItem>
        </Box>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
