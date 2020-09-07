import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SettingsService } from '../settings.service';
import { Observable } from 'rxjs';
import { Settings } from '../settings';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public settings$: Observable<Settings>;

  constructor(public dialogRef: MatDialogRef<SettingsComponent>, private settingsService: SettingsService) {
    this.settings$ = settingsService.getSettings();
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>, settings: Settings): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.settingsService.setSettings(settings);
  }

  generateSeed(): void {
    this.settingsService.setSeed(Math.random());
  }
}
