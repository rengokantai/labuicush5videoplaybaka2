import {Injectable} from '@angular/core';

@Injectable()
export class VideoService {

  public videoElement:any;
  public currentPath:string = "";
  public currentTitle:string = "loading...";

  constructor() {}

  appSetup(v:string) {
    this.videoElement = <HTMLVideoElement> document.getElementById(v);
    this.currentPath = "./video/cow.mp4";
    this.currentTitle = "cow video";
  }

}
