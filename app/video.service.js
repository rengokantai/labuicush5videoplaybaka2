"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var VideoService = (function () {
    function VideoService() {
        var _this = this;
        this.currentPath = "";
        this.currentTitle = "loading...";
        this.currentTime = 0;
        this.totalTime = 0;
        this.isMuted = false;
        this.updateData = function (e) {
            _this.totalTime = _this.videoElement.duration;
        };
        this.updateTime = function (e) {
            _this.currentTime = _this.videoElement.currentTime;
        };
        this.timerFired = function () {
            _this.calculatedScrubY = _this.videoElement.offsetHeight;
            var t = _this.videoElement.currentTime;
            var d = _this.videoElement.duration;
            _this.calculatedWidth = (t / d * _this.videoElement.offsetWidth);
        };
    }
    VideoService.prototype.appSetup = function (v) {
        this.videoElement = document.getElementById(v);
        this.videoElement.addEventListener("loadedmetadata", this.updateData);
        this.videoElement.addEventListener("timeupdate", this.updateTime);
        this.currentPath = "./video/cow.mp4";
        this.currentTitle = "cow video";
        window.setInterval(this.timerFired, 500);
    };
    VideoService.prototype.muteVideo = function () {
        if (this.videoElement.volume == 0) {
            this.videoElement.volume = 1;
            this.isMuted = false;
        }
        else {
            this.videoElement.volume = 0;
            this.isMuted = true;
        }
    };
    ;
    VideoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map