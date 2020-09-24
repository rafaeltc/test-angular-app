import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Kitty} from '../../models/kitty.model';

@Component({
  selector: 'app-kitty-card',
  templateUrl: './kitty-card.component.html',
  styleUrls: ['./kitty-card.component.css']
})
export class KittyCardComponent implements OnInit {
  @Input() kitty: Kitty;
  @Output() kittyDelete = new EventEmitter<Kitty>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log(`Deleting ${this.kitty.name}`);
    this.kittyDelete.emit(this.kitty);
  }

}
