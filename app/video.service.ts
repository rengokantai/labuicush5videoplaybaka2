import {Injectable} from '@angular/core';

@Injectable()
export class VideoService {

  public videoElement:any;

  constructor() {}

  appSetup(v:string) {
    this.videoElement = <HTMLVideoElement> document.getElementById(v);
  }

}
