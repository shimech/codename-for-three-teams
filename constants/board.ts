export const ROWS = 6;

export const COLUMNS = 6;

export const ALL = ROWS * COLUMNS;

export const NUM_TEAMS = {
  RED: 10,
  BLUE: 9,
  YELLOW: 8,
};

export const NUM_ASSASSINS = 1;

export const NUM_CITIZENS =
  ALL - NUM_TEAMS.RED - NUM_TEAMS.BLUE - NUM_TEAMS.YELLOW - NUM_ASSASSINS;
