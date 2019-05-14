import { Component, OnInit } from '@angular/core';
import { DataAccessService } from "../../services/data-access.service";
import { Civilization } from 'src/app/models/civilization';
import { ConnToModService } from 'src/app/services/conn-to-mod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modciv',
  templateUrl: './modciv.component.html',
  styleUrls: ['./modciv.component.css']
})
export class ModcivComponent implements OnInit {

  civilization: Civilization = {
    _id: '',
    name: '',
    expansion: '',
    army: ''
  };

  _id;
  error;

  constructor(private dataAccessService: DataAccessService, private connToMod: ConnToModService, public router: Router) { }

  public ModCivs(civilization, _id) {
    this.error = 0;
    console.log(civilization);
    const data = {id: _id};
    console.log(data.id)
    this.dataAccessService.modUrl(data, civilization)
      .subscribe( res => {
        console.log(res);
        if (res) {
          this.error = 1;
          this.connToMod.setError(this.error);
          this.router.navigate([`/home`]);
        } else {
          this.error = 2;
          this.connToMod.setError(this.error);
          this.router.navigate([`/home`]);
        }
      },
      error => {
        this.error = 2;
        this.connToMod.setError(this.error);
        this.router.navigate([`/home`]);
      });
  }

  ngOnInit() {
    this.civilization = this.connToMod.getCiv();
  }

}
