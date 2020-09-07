import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { Race } from '../race';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  @Input() availableRaces: Race[];
  @Output() playerChange = new EventEmitter<Player>();
  @Output() remove = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  changeName(newName: string): void {
    this.player.name = newName;
    this.playerChange.emit(this.player);
  }
  removePlayer(): void {
    this.remove.emit();
  }
  changeBannedRaces(bannedRaces: Race[]): void {
    this.player.bannedRaces = bannedRaces;
    this.playerChange.emit(this.player);
  }
  bannedCompareFn(a: Race, b:Race): boolean {
    return a.id == b.id;
  }
}
