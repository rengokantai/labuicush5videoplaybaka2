import {Component,OnInit} from '@angular/core';
import {ProgressComponent} from './progress.component';
import {ToolbarComponent} from './toolbar.component';
import {VideoService} from './video.service';

@Component({
	selector:'video-app',
	template:`
			<div class="row">
      	      <div class="col-sm-12">
        <div id="fullPlayer">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" width="100%" height="100%" src="{{videoService.currentPath}}"  class="embed-responsive-item" controls></video>
              <div id="bigPlayButton"><i class="fa fa-play"></i></div>
              <div id="videoTitle">{{videoService.currentTitle}}</div>
          </div>
          <video-progress></video-progress>
          <video-toolbar></video-toolbar>
        </div>
      </div>
    </div>
	`,
    directives: [ProgressComponent, ToolbarComponent],
    providers: [VideoService]
})

export class AppComponent implements OnInit {
    constructor(public videoService:VideoService) {}
    ngOnInit() {
        this.videoService.appSetup("videoDisplay");
    }
}