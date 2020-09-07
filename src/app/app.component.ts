import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './settings.service';
import { Observable } from 'rxjs';
import { Settings } from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'TI4-race-assigner';
  public settings$: Observable<Settings>;
  public tinyURL: string = '';

  constructor(public dialog: MatDialog, public settingsService: SettingsService) {
    this.settings$ = settingsService.getSettings();
  }

  openSettings(): void {
    this.dialog.open(SettingsComponent);
  }
  generateURL(settings: Settings): void {
    let url = location.protocol + '//' + location.hostname + ':' + location.port + location.pathname + '#' + encodeURIComponent(JSON.stringify(settings));
    this.tinyURL = '';
    let alias = 'TI4Races-' + Math.random().toString().substr(2);
    fetch('https://tinyurl.com/create.php?source=create&url=' + encodeURIComponent(url) + '&alias=' + alias, { mode: 'no-cors' }).then(
        a => {
          this.tinyURL = 'https://tinyurl.com/' + alias;
        },
        b => {
          this.tinyURL = 'Error while trying to create URL';
          console.error(b);
        }
      );
  }
}
