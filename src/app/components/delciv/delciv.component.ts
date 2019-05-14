import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../../services/data-access.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delciv',
  templateUrl: './delciv.component.html',
  styleUrls: ['./delciv.component.css']
})
export class DelcivComponent implements OnInit {

  id = '';

  error;

  constructor(private dataAccessService: DataAccessService) { }

  public delCivs(id) {
    this.error = 0;
    const data = { id: id };
    console.log(id);
    this.dataAccessService.delUrl(data)
      .subscribe(res => {
        if (res.message === 'Deleted') {
          this.error = 1;
        } else if (res.message === 'Null') {
          this.error = 2;
        }
      },
      error => {
        if (error.status === 500) {
          this.error = 3;
        }
      });
  }

  ngOnInit() {
  }

}
