import { Component, OnInit } from '@angular/core';
import { Civilization } from 'src/app/models/civilization';
import { HttpClient } from "@angular/common/http";

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

  constructor(private http: HttpClient) { }

  public postCivs(civilization) {
    console.log(civilization);
    this.http
      .post('http://localhost:3030/createciv', civilization)
      .subscribe( res => {
        console.log(res);
      })
  }

  ngOnInit() {
  }

}
