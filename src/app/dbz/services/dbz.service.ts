import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    name: 'krillin',
    power: 1000,
    id: uuid(),
  }, {
    name: 'goku',
    power: 9500,
    id: uuid(),
  },{
    name: 'Vegeta',
    power: 7500,
    id: uuid(),
  }];

  onNewCharacter( character: Character): void {

    const newCharacter = {
      ...character,
      id: uuid(),
    }

    this.characters.push(newCharacter)
  }

  deleteCharacterById( id: string): void {
    this.characters = this.characters.filter( character => character.id !== id)
  }

}
