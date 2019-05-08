import { Component, OnInit } from '@angular/core';
import { DataAccessService } from "../../services/data-access.service";
import { Router } from '@angular/router';
import { Civilization } from 'src/app/models/civilization';
import { ConnToModService } from 'src/app/services/conn-to-mod.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  civilizations;

  constructor(private connToMod: ConnToModService, private dataAccessService: DataAccessService, private router: Router) {
    this.dataAccessService.getUrl().subscribe(res => {
      this.civilizations = res;
    })
    console.log (this.civilizations);
  }

  ngOnInit() {
  }

  sendIdToMod(_id, id, name, expansion, army) {
    let civToMod: Civilization = {
      _id: _id[0],
      id: id[0],
      name: name[0],
      expansion: expansion[0],
      army: army[0]
    }

    this.connToMod.setCiv(civToMod);
    console.log(_id, id, name, expansion, army);
    this.router.navigate([`/updateciv`]);
  }

}
