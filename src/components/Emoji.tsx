import bullsEys from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullsEys, alt: "exceptional", boxSize: "35px" },
    4: { src: thumbsUp, alt: "recommend", boxSize: "25px" },
    3: { src: meh, alt: "meh", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1}></Image>;
};

export default Emoji;
