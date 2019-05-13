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
    id: 0,
    name: '',
    expansion: '',
    army: ''
  };

  _id;

  constructor(private dataAccessService: DataAccessService, private connToMod: ConnToModService, public router: Router) { }

  public ModCivs(civilization, _id) {
    console.log(civilization);
    const data = {id: _id};
    console.log(data.id)
    this.dataAccessService.modUrl(data, civilization)
      .subscribe( res => {
        console.log(res);
        //this.router.navigate([`/home`])
      });
  }

  ngOnInit() {
    this.civilization = this.connToMod.getCiv();
  }

}
