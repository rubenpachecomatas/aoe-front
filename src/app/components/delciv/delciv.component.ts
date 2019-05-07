import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delciv',
  templateUrl: './delciv.component.html',
  styleUrls: ['./delciv.component.css']
})
export class DelcivComponent implements OnInit {

  id = '';

  constructor(private http: HttpClient) { }

  public delCivs(id) {
    const data = { id: id }
    console.log(id);
    this.http
      .post('http://localhost:3030/deleteciv', data)
      .subscribe( res => {
        console.log(res);
      })
  }

  ngOnInit() {
  }

}
