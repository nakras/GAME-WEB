import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Hide,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticcScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticcScore score={game.metacritic}></CriticcScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
