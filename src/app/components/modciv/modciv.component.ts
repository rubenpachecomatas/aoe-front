import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  public ModCivs(civilization, _id) {
    console.log(civilization);
    const data = {id: this._id};
    this.http
      .post('http://localhost:3030/updateciv', {data, civilization})
      .subscribe( res => {
        console.log(res);
      });
  }

  ngOnInit() {
  }

}
