// angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// lib
import { Observable } from 'rxjs/Observable';
import { ConferenceSpeakerApi } from '@ngatl/api';

@Injectable()
export class SpeakerService {
  constructor(private speakers: ConferenceSpeakerApi) {}

  public count() {
    return this.speakers.count().map(value => value.count);
  }

  public fetch() {
    console.log('fetch speakers!');
    return this.speakers.find();
  }

  public loadDetail(id) {
    return this.speakers.findById(id);
  }
}
