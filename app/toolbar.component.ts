import {Component} from '@angular/core';
import {VideoService} from "./video.service";
import {TimeDisplayPipe} from "./timedisplay.pipe";

@Component({
    selector: 'video-toolbar',
    template: `
    <div id="playerToolBar">
        <span id="videoTime">{{videoService.currentTime | timeDisplay}} / {{videoService.totalTime | timeDisplay}}</span>
    </div>
    `,
    pipes: [TimeDisplayPipe]
})
export class ToolbarComponent {
    constructor(public videoService:VideoService) {}
}
