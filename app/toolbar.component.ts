import {Component} from '@angular/core';
import {VideoService} from "./video.service";
import {TimeDisplayPipe} from "./timedisplay.pipe";

@Component({
    selector: 'video-toolbar',
    template: `
    <div id="playerToolBar">
        <a id="muteBtn" class="btn btn-default" (click)="videoService.muteVideo()">
            <i [ngClass]="{'fa-volume-off': videoService.isMuted, 'fa-volume-up': !videoService.isMuted}" class="fa"></i>
        </a>
        <span id="videoTime">{{videoService.currentTime | timeDisplay}} / {{videoService.totalTime | timeDisplay}}</span>
    </div>
    `,
    pipes: [TimeDisplayPipe]
})
export class ToolbarComponent {
    constructor(public videoService:VideoService) {}
}
