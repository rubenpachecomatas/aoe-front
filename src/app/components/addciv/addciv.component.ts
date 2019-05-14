import { Component, OnInit } from '@angular/core';
import { Civilization } from 'src/app/models/civilization';
import { DataAccessService } from "../../services/data-access.service";


@Component({
  selector: 'app-addciv',
  templateUrl: './addciv.component.html',
  styleUrls: ['./addciv.component.css']
})
export class AddcivComponent implements OnInit {

  civilization: Civilization = {
    name: '',
    expansion: '',
    army: ''
  };

  error;

  constructor(private dataAccessService: DataAccessService) { }

  public postCivs(civilization) {
    this.error = 0;
    console.log(civilization);
    this.dataAccessService.addUrl(civilization)
    .subscribe( res => {
        console.log(res);
        if (res) {
          this.error = 1;
        } else {
          this.error = 2;
        }
      },
      error => {
        this.error = 2;
      })
  }

  ngOnInit() {
  }

}
