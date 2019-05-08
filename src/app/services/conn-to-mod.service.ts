import { Injectable } from '@angular/core';
import { Civilization } from '../models/civilization';

@Injectable({
  providedIn: 'root'
})
export class ConnToModService {

  constructor() { }

  CivFromService: Civilization;

  setCiv(Civ) {
    this.CivFromService = Civ;
    console.log(this.CivFromService);
  }

  getCiv() {
    console.log(this.CivFromService);
    return this.CivFromService;
  }
}
