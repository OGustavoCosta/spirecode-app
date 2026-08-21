import * as migration_20260821_191931 from './20260821_191931';

export const migrations = [
  {
    up: migration_20260821_191931.up,
    down: migration_20260821_191931.down,
    name: '20260821_191931'
  },
];
