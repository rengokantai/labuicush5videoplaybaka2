import {Component} from '@angular/core';
import {VideoService} from "./video.service";

@Component({
    selector: 'video-toolbar',
    template: `
    <div id="playerToolBar">
        <span id="videoTime">{{videoService.currentTime}} / {{videoService.totalTime}}</span>
    </div>
    `
})
export class ToolbarComponent {
    constructor(public videoService:VideoService) {}
}
