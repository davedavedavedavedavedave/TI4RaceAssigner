import { Race } from './race';
import { Player } from './player';

export class Settings {

  constructor(
    public availableRaces: Race[] = [],
    public bannedRaces: Race[] = [],
    public players: Player[] = [],
    public seed: number = 0
  ) { }

  public static buildFromObject(object: any) {
    let s = new Settings();
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && ['AVAILABLERACES', 'BANNEDRACES', 'SEED', 'PLAYERS'].indexOf(key.toUpperCase()) > -1) {
        s[key] = object[key];
      }
    }
    return s;
  }
}
