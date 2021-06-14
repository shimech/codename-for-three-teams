import { Card } from "@/models/card";
import { COLOR } from "@/constants/color";
import { NUM_TEAMS, NUM_ASSASSINS, NUM_CITIZENS } from "@/constants/board";

export const TEAM_RED: Card = {
  isSelected: false,
  color: COLOR.RED,
  num: NUM_TEAMS.RED,
};

export const TEAM_BLUE: Card = {
  isSelected: false,
  color: COLOR.BLUE,
  num: NUM_TEAMS.BLUE,
};

export const TEAM_YELLOW: Card = {
  isSelected: false,
  color: COLOR.YELLOW,
  num: NUM_TEAMS.YELLOW,
};

export const ASSASSIN: Card = {
  isSelected: false,
  color: COLOR.BLACK,
  num: NUM_ASSASSINS,
};

export const CITIZEN: Card = {
  isSelected: false,
  color: COLOR.WHITE,
  num: NUM_CITIZENS,
};
