import {Component,OnInit} from '@angular/core';
import {ProgressComponent} from './progress.component';
import {ToolbarComponent} from './toolbar.component';
import {OptionsComponent} from './options.component';
import {VideoService} from './video.service';

@Component({
	selector:'video-app',
	template:`

        <div id="fullPlayer"  (mouseup)="videoService.dragStop($event)" (mousemove)="videoService.dragMove($event)" (mouseleave)="videoService.dragStop($event)">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" width="100%" height="100%" src="{{videoService.currentPath}}"  class="embed-responsive-item" controls></video>
              <div id="bigPlayButton" [hidden]="videoService.isPlaying" (click)="videoService.playVideo()"><i class="fa fa-play"></i></div>
              <div id="videoTitle" [hidden]="videoService.isPlaying">{{videoService.currentTitle}}</div>
              <video-options [hidden]="!videoService.showDetails"></video-options>
          </div>
          <video-progress></video-progress>
          <video-toolbar></video-toolbar>
        </div>

	`,
    directives: [ProgressComponent, ToolbarComponent, OptionsComponent],
    providers: [VideoService]
})

export class AppComponent implements OnInit {
    constructor(public videoService:VideoService) {}
    ngOnInit() {
        this.videoService.appSetup("videoDisplay");
    }
}