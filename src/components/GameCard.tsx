import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { GameType } from "../types/types";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: GameType;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card display='block' height='100%'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
