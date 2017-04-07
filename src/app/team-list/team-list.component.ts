import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymnastService } from '../gymnast.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Gymnast } from '../gymnast.model';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [GymnastService]
})

export class TeamListComponent implements OnInit {
  gymnasts: FirebaseListObservable<any[]>;

  constructor(private Router:Router, public gymnastService:GymnastService) { }

  ngOnInit() {
    this.gymnasts = this.gymnastService.getGymnasts();
  }

}
