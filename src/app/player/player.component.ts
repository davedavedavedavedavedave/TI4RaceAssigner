import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
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
}
