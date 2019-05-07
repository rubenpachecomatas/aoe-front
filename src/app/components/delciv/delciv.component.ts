import { Component, OnInit } from '@angular/core';
import { DataAccessService } from "../../services/data-access.service";

@Component({
  selector: 'app-delciv',
  templateUrl: './delciv.component.html',
  styleUrls: ['./delciv.component.css']
})
export class DelcivComponent implements OnInit {

  id = '';

  constructor(private dataAccessService: DataAccessService) { }

  public delCivs(id) {
    const data = { id: id }
    console.log(id);
    this.dataAccessService.delUrl(data)
      .subscribe( res => {
        console.log(res);
      })
  }

  ngOnInit() {
  }

}
