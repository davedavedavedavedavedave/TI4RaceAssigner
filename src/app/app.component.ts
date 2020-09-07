import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './settings.service';
import { Observable } from 'rxjs';
import { Settings } from './settings';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'TI4-race-assigner';
  public settings$: Observable<Settings>;

  constructor(public dialog: MatDialog, private settingsService: SettingsService) {
    this.settings$ = settingsService.getSettings();
  }

  openSettings(): void {
    this.dialog.open(SettingsComponent);
  }
  addPlayer(): void {
    this.settingsService.addPlayer(new Player());
  }
  changePlayer(newPlayer: Player, settings: Settings, index: number): void {
    console.log(newPlayer);
    settings.players[index] = newPlayer;
    this.settingsService.setSettings(settings);
  }
  removePlayer(settings: Settings, index: number): void {
    settings.players.splice(index, 1);
    this.settingsService.setSettings(settings);
  }
}
