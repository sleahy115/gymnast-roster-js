import { Injectable } from '@angular/core';
import { Gymnast } from './gymnast.model';
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

  getGymnastById(key) {
    console.log(key);
    return this.angularFire.database.object('gymnasts/'+ key);
  }

  addGymnast(newGymnast:Gymnast){
    this.gymnasts.push(newGymnast);
  }

  editGymnast(gymnast) {
    var entry = this.getGymnastById(gymnast.$key);
    entry.update(gymnast);
  }

  delete(gymnast){
    var entry = this.getGymnastById(gymnast.$key);
    entry.remove();
  }

}
