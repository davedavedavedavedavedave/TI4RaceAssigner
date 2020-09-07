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
    let settings = Settings.buildFromObject(JSON.parse(localStorage.getItem('settings')));
    if (settings.availableRaces.length + settings.bannedRaces.length == 0) { // if no races, initialize availableRaces array
      settings.availableRaces = RACES.slice();
    }
    this._settings$ = new BehaviorSubject(settings);
    this._settings$.pipe(debounceTime(1000)).subscribe(settings => localStorage.setItem('settings', JSON.stringify(settings)));
  }

  getSettings(): Observable<Settings> {
    return this._settings$;
  }
  setSettings(newSettings: Settings): void {
    this._settings$.next(newSettings);
  }
  setSeed(seed: number): void {
    let settings = this._settings$.getValue();
    settings.seed = seed;
    this.setSettings(settings);
  }
  addPlayer(player: Player): void {
    let settings = this._settings$.getValue();
    settings.players.push(player);
    this.setSettings(settings);
  }
}
