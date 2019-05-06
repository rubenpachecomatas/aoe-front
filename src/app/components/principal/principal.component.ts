import { Component, OnInit } from '@angular/core';
import { DataAccessService } from "../../services/data-access.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  civilizations;

  constructor(private dataAccessService: DataAccessService) {
    this.dataAccessService.getUrl().subscribe(res => {
      this.civilizations = res;
    })
    console.log (this.civilizations);
  }

  ngOnInit() {
  }

}
