import {Injectable} from '@angular/core';

@Injectable()
export class VideoService {

  public videoElement:any;
  public currentPath:string = "";
  public currentTitle:string = "loading...";
  public currentTime:number = 0;
  public totalTime:number = 0;
  public calculatedWidth:number;
  public calculatedScrubY:number;
  public isMuted:boolean = false;
  constructor() {}

  appSetup(v:string) {
    this.videoElement = <HTMLVideoElement> document.getElementById(v);
    this.videoElement.addEventListener("loadedmetadata", this.updateData);
    this.videoElement.addEventListener("timeupdate", this.updateTime);
    this.currentPath = "./video/cow.mp4";
    this.currentTitle = "cow video";
    window.setInterval(this.timerFired, 500);
  }

  muteVideo() {
    if(this.videoElement.volume == 0) {
      	this.videoElement.volume = 1;
      	this.isMuted = false;
  	}else{
      	this.videoElement.volume = 0;
      	this.isMuted = true;
  	}
  };

  updateData = (e:any) => {
      this.totalTime = this.videoElement.duration;
  };
  updateTime = (e:any) => {
      this.currentTime = this.videoElement.currentTime;
  };

  timerFired = () => {
      this.calculatedScrubY = this.videoElement.offsetHeight;
      var t = this.videoElement.currentTime;
      var d = this.videoElement.duration;
      this.calculatedWidth = (t / d * this.videoElement.offsetWidth);
  };

}
