import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../race';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  @Input() race: Race;

  constructor() { }

  ngOnInit(): void {
  }

}
