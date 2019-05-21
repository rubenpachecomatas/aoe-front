import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../../services/data-access.service';
import { Router } from '@angular/router';
import { ConnToModService } from 'src/app/services/conn-to-mod.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  civilizations;
  error = 0;
  errorD = '';
  filterPost = '';
  show = false;
  saveId = '';

  constructor(private connToMod: ConnToModService, private dataAccessService: DataAccessService, public router: Router) {
    this.dataAccessService.getUrl().subscribe(res => {
      this.civilizations = res;
    })
    console.log (this.civilizations);
  }

  ngOnInit() {
    this.error = this.connToMod.getError();
    console.log(this.error);
    this.connToMod.setError(0);
  }

  sendIdToMod(civilization) {
    this.connToMod.setCiv(civilization);
    console.log(civilization);
    this.router.navigate([`/updateciv`]);
  }

  public delCivs() {
    const data = { id: this.saveId };
    this.dataAccessService.delUrl(data)
      .subscribe(res => {
        if (res.message === 'Deleted') {
          location.reload();
        } else if (res.message === 'Null') {
          this.errorD = 'notdeleted';
        }
      },
      error => {
        if (error.status === 500) {
          this.errorD = 'notdeleted';
        }
      });
  }
  
}
