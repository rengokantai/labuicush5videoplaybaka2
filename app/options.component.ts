import {Component} from '@angular/core';
import {VideoService} from "./video.service";

@Component({
    selector: 'video-options',
    template: `
    <div id="VideoOptions" [hidden]="!videoService.showDetails" class="card">
        <div class="panel-heading">
            <h1 class="panel-title">{{videoService.currentTitle}}</h1>
        </div>
        <div class="panel-body">
            <div class="col-xs-6">
                <h2>Video Details:</h2>
                <p>{{videoService.currentDesc}}</p>
            </div>
            <div class="col-xs-6"></div>
        </div>
    </div>
    `
})
export class OptionsComponent {
    constructor(public videoService:VideoService) {}
}
