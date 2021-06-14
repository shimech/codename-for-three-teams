import { Card } from "@/models/card";
import {
  TEAM_RED,
  TEAM_BLUE,
  TEAM_YELLOW,
  ASSASSIN,
  CITIZEN,
} from "@/constants/card";

export const createBoard = (): Card[] => {
  const cards = [TEAM_RED, TEAM_BLUE, TEAM_YELLOW, ASSASSIN, CITIZEN];
  const board: Card[] = [];
  cards.forEach((card) => {
    for (let i = 0; i < card.num; i++) {
      board.push(card);
    }
  });
  return shuffle<Card>(board);
};

export const shuffle = <T>(array: Array<T>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  return array;
};
