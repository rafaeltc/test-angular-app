import { Component, OnInit } from '@angular/core';
import { Kitty } from '../models/kitty.model';
import Axios from 'axios';

@Component({
  selector: 'app-kitty-card-list',
  templateUrl: './kitty-card-list.component.html',
  styleUrls: ['./kitty-card-list.component.css']
})
export class KittyCardListComponent implements OnInit {
  kittyName: string;
  kitties: Kitty[] = [
    new Kitty(
      'Nicolau',
      'Scottish Straight',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lilac_Scottish_Fold.jpg/440px-Lilac_Scottish_Fold.jpg',
      'https://www.petfinder.com/cat-breeds/scottish-fold/ '),
    new Kitty(
      'Beocca Moon',
      'British Shorthair',
      'https://c8.alamy.com/comp/M8PFBM/portrait-big-gray-cat-british-straight-with-yellow-eyes-on-a-white-M8PFBM.jpg',
      'https://www.petfinder.com/cat-breeds/british-shorthair/')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddKitty(){

    if (!this.kittyName.trim()) {
      console.log(`kitty name is empty`);
    }
    else if (!this.kitties.filter((cat) => cat.name === this.kittyName.trim())) {
      console.log(`kitty: ${this.kittyName} already exists`);
    }
    else {
      this.kitties.push(this.createKitty(this.kittyName));
    }
    this.kittyName = '';
  }

  onKittyDelete(kitty: Kitty) {
    console.log('Received kitty delete event for kitten: ' + kitty.name);
    this.kitties = this.kitties.filter((cat) => cat.name !== kitty.name);
  }

  private createKitty(name: string): Kitty {
    const breedInfo = this.getRandomCatBreed();
    // let img = null;
    // Axios.get('http://requestkittens.com/cats', {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   }}).then( res => {
    //     console.log(res);
    //     img = res;
    //   });

    return new Kitty(name, breedInfo.breed, `https://loremflickr.com/250/250/cat,${breedInfo.breed}`, `https://www.petfinder.com/cat-breeds/${breedInfo.breedUrl}`);
  }

  private getRandomCatBreed(): {breed: string, breedUrl: string} {
    const breeds = [
      'Abyssinian',
      'American Bobtail',
      'American Curl',
      'American Shorthair',
      'American Wirehair',
      'Balinese-Javanese',
      'Bengal',
      'Birman',
      'Bombay',
      'British Shortair',
      'Burmese',
      'Chartreux'
    ];
    const breedInfo = breeds[Math.floor(Math.random() * breeds.length)];
    return { breed: breedInfo, breedUrl: breedInfo.toLowerCase().replace(' ', '-')};
  }

  onKittySelect(kitty: Kitty) {
    kitty.isSelected = !kitty.isSelected;
  }
}
