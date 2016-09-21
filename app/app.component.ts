import {Component} from '@angular/core';

@Component({
	selector:'video-app',
	template:`
			<div class="row">
      	      <div class="col-sm-12">
        <div id="fullPlayer">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" width="100%" height="100%" src="./video/cow.mp4"  class="embed-responsive-item" controls></video>
              <div id="bigPlayButton"><i class="fa fa-play"></i></div>
              <div id="videoTitle">Video Title</div>
          </div>
          <video-progress></video-progress>
          <video-toolbar></video-toolbar>
        </div>
      </div>
    </div>
	`
})

export class AppComponent{
	constructor(){

	}
}