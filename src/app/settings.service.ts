import { Injectable } from '@angular/core';
import { Settings } from './settings';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { Race } from './race';
import { Player } from './player';

const RACES: Race[] = ["The Arborec","The Barony of Letnev","The Clan of Saar","The Embers of Muaat","The Emirates of Hacan","The Federation of Sol","The Ghosts of Creuss","The L1Z1X Mindnet","The Mentak Coalition","The Naalu Collective","The Nekro Virus","The Sardakk N’orr","The Universities of Jol-Nar","The Winnu","The Xxcha Kingdom","The Yin Brotherhood","The Yssaril Tribes"].map((name, idx) => new Race(idx, name));

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _settings$: BehaviorSubject<Settings>;

  constructor() {
    let settings: Settings;
    try {
      settings = Settings.buildFromObject(JSON.parse(decodeURIComponent(location.hash.substr(1))));
    } catch (e) {
      settings = new Settings();
    }
    if (settings.availableRaces.length + settings.bannedRaces.length == 0) { // if no races, initialize availableRaces array
      settings.availableRaces = RACES.slice();
    }
    settings.assignRaces();
    this._settings$ = new BehaviorSubject(settings);
    //this._settings$.pipe(debounceTime(300)).subscribe(settings => location.hash = JSON.stringify(settings));
  }

  getSettings(): Observable<Settings> {
    return this._settings$;
  }
  setSettings(newSettings: Settings): void {
    newSettings.assignRaces();
    this._settings$.next(newSettings);
  }
  setSeed(seed: string|null = null): void {
    let settings = this._settings$.getValue();
    if (seed != null) {
      settings.seed = seed;
    } else {
      settings.seed = Math.random().toString();
    }
    this.setSettings(settings);
  }
  setRacesPerPlayer(racesPerPlayer: number): void {
    let settings = this._settings$.getValue();
    settings.racesPerPlayer = racesPerPlayer;
    this.setSettings(settings);
  }
  addPlayer(player: Player|null = null): void {
    let settings = this._settings$.getValue();
    if (player != null) {
      settings.players.push(player);
    } else {
      settings.players.push(new Player());
    }
    this.setSettings(settings);
  }
  removePlayer(index: number): void {
    let settings = this._settings$.getValue();
    settings.players.splice(index, 1);
    this.setSettings(settings);
  }
  changePlayer(newPlayer: Player, index: number): void {
    let settings = this._settings$.getValue();
    settings.players[index] = newPlayer;
    this.setSettings(settings);
  }
}
