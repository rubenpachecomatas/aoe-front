import { Component, OnInit } from '@angular/core';
import { DataAccessService } from "../../services/data-access.service";
import { Civilization } from 'src/app/models/civilization';

@Component({
  selector: 'app-modciv',
  templateUrl: './modciv.component.html',
  styleUrls: ['./modciv.component.css']
})
export class ModcivComponent implements OnInit {

  civilization: Civilization = {
    id: 0,
    name: '',
    expansion: '',
    army: ''
  };

  _id;

  constructor(private dataAccessService: DataAccessService) { }

  public ModCivs(civilization, _id) {
    console.log(civilization);
    const data = {id: this._id};
    this.dataAccessService.modUrl(data, civilization)
      .subscribe( res => {
        console.log(res);
      });
  }

  ngOnInit() {
  }

}
