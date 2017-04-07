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
  gymnasts;


  constructor(private router:Router, private GymnastService:GymnastService) { }

  ngOnInit() {
    this.GymnastService.getGymnasts().subscribe(snap => {
      this.gymnasts = snap;
    });
  }

  goToProfile(clickedGymnast:Gymnast) {
    this.router.navigate(['gymnasts', clickedGymnast.id]);
  }

}
