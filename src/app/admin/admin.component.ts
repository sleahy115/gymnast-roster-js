import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { GymnastService } from '../gymnast.service';
import { Gymnast } from '../gymnast.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [GymnastService]
})
export class AdminComponent implements OnInit {

  constructor(private gymnastService:GymnastService) { }

  ngOnInit() {
  }

  submitNewGymnast(name:string, level:any, events:string, careerHighBeam:number, careerHighBars:number,careerHighFloor:number, careerHighVault:number, status:string) {
    var newGymnast: Gymnast = new Gymnast(name, level, events, careerHighBeam, careerHighBars,careerHighFloor, careerHighVault, status);
    this.gymnastService.addGymnast(newGymnast);
  }

}
