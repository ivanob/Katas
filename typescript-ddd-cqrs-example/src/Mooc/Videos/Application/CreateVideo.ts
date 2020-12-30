import { IVideoRepository } from '../Domain/IVideoRepository';
import { VideoId } from '../Domain/VideoId';
import { VideoTitle } from '../Domain/VideoTitle';
import { VideoDuration } from '../Domain/VideoDuration';
import { Video } from '../Domain/Video';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CreateVideo {
  constructor(@Inject('IVideoRepository') private repo: IVideoRepository) {}

  create(id: VideoId, title: VideoTitle, duration: VideoDuration) {
    const video = new Video(id, title, duration);
    this.repo.createVideo(video);
  }
}
