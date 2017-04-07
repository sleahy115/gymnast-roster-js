import { Injectable } from '@angular/core';
// import { Gymnast } from './gymnast.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class GymnastService {

  gymnasts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.gymnasts = angularFire.database.list('gymnasts');
  }

  getGymnasts() {
    return this.gymnasts;
  }

}
