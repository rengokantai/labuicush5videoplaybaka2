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
  public isPlaying:boolean = false;
  constructor() {}

  appSetup(v:string) {
    this.videoElement = <HTMLVideoElement> document.getElementById(v);
    this.videoElement.addEventListener("loadedmetadata", this.updateData);
    this.videoElement.addEventListener("timeupdate", this.updateTime);
    this.currentPath = "./video/cow.mp4";
    this.currentTitle = "cow video";
    window.setInterval(this.timerFired, 500);
  }

  seekVideo(e:any) {
      var w = document.getElementById('progressMeterFull').offsetWidth;
      var d = this.videoElement.duration;
      var s = Math.round(e.pageX / w * d);
      this.videoElement.currentTime = s;
  };


  

  muteVideo() {
    if(this.videoElement.volume == 0) {
      	this.videoElement.volume = 1;
      	this.isMuted = false;
  	}else{
      	this.videoElement.volume = 0;
      	this.isMuted = true;
  	}
  };

   playVideo() {
      if(this.videoElement.paused) {
          this.videoElement.play();
          this.isPlaying = true;
      }else{
          this.videoElement.pause();
          this.isPlaying = false;
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
