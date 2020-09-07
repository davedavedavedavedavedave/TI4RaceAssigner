import { Race } from './race';
import { Player } from './player';
import * as seedrandom from 'seedrandom';

export class Settings {

  constructor(
    public availableRaces: Race[] = [],
    public bannedRaces: Race[] = [],
    public players: Player[] = [],
    public racesPerPlayer: number = 2,
    public seed: string = ''
  ) { }

  public static buildFromObject(object: any) {
    let s = new Settings();
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && ['AVAILABLERACES', 'BANNEDRACES', 'SEED', 'PLAYERS', 'RACESPERPLAYER'].indexOf(key.toUpperCase()) > -1) {
        s[key] = object[key];
      }
    }
    return s;
  }
  assignRaces(): void {
    let rng = seedrandom(this.seed);
    let races = this.availableRaces
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(r => { return { x: rng(), r: r } })
      .sort((a, b) => a.x - b.x)
      .map(x => x.r);
    for (let i = 0; i < this.racesPerPlayer; i++) {
      for (let j = 0; j < this.players.length; j++) {
        if (races.length === 0) {
          return;
        }
        if (i == 0) {
          this.players[j].availableRaces = [];
        }
        for (let k = 0; k < races.length; k++) {
          if (this.players[j].bannedRaces.findIndex(r => r.id == races[k].id) < 0) {
            this.players[j].availableRaces.push(races.splice(k, 1)[0]);
            break;
          }
        }
      }
    }
  }
}
