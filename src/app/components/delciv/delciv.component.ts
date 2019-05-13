import { Component, OnInit } from '@angular/core';
import { DataAccessService } from "../../services/data-access.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delciv',
  templateUrl: './delciv.component.html',
  styleUrls: ['./delciv.component.css']
})
export class DelcivComponent implements OnInit {

  id = '';

  success: boolean;
  error: boolean;

  constructor(private dataAccessService: DataAccessService) { }

  public delCivs(id) {
    this.success = false;
    this.error = false;
    const data = { id: id }
    console.log(id);
    this.dataAccessService.delUrl(data)
      .subscribe( res => {
        console.log(res.message);
        console.log(HttpErrorResponse);
        if (res.message === 'Deleted') {
          this.success = true;
        } else if (res.message === 'Null') {
          this.error = true;
        }
      });
  }

  ngOnInit() {
  }

}
