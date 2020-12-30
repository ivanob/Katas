import { VideoId } from './VideoId';
import { VideoTitle } from './VideoTitle';
import { VideoDuration } from './VideoDuration';

export class Video {
  title: VideoTitle;
  duration: VideoDuration;
  id: VideoId;

  constructor(id: VideoId, title: VideoTitle, duration: VideoDuration) {
    this.title = title; //Validate it is at least 5 letters
    this.duration = duration; //Validate it is bigger than 0
    this.id = id;
  }
}
