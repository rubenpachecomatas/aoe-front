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
    id: 0,
    name: '',
    expansion: '',
    army: ''
  };
  success: boolean;
  error: boolean;

  constructor(private dataAccessService: DataAccessService) { }

  public postCivs(civilization) {
    this.success = false;
    this.error = false;
    console.log(civilization);
    this.dataAccessService.addUrl(civilization)
    .subscribe( res => {
        console.log(res);
        if (res) {
          this.success = true;
        } else {
          this.error = true;
        }
      })
  }

  ngOnInit() {
  }

}
