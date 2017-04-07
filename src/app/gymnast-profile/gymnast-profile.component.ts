import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Gymnast } from '../gymnast.model';
import { GymnastService } from '../gymnast.service';

@Component({
  selector: 'app-gymnast-profile',
  templateUrl: './gymnast-profile.component.html',
  styleUrls: ['./gymnast-profile.component.css'],
  providers: [GymnastService]
})
export class GymnastProfileComponent implements OnInit {
  gymnastId: number = null;
  gymnast:Gymnast;

  constructor(private route:ActivatedRoute, private location: Location, private gymnastService:GymnastService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.gymnastId = parseInt(urlParameters['id']);
    });
    this.gymnastService.getGymnastById(this.gymnastId).subscribe(snap => {
      this.gymnast = snap;
      console.log(snap);
    });
  }

}
