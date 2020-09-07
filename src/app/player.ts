import { Race } from './race';

export class Player {
  constructor(
    public name: string = '',
    public availableRaces: Race[] = [],
    public bannedRaces: Race[] = []
  ) { }
}
