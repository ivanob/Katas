import { IVideoRepository } from '../Domain/IVideoRepository';
import { VideoId } from '../Domain/VideoId';
import { Video } from '../Domain/Video';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class SearchVideo {
  constructor(@Inject('IVideoRepository') private repo: IVideoRepository) {}

  search(id: VideoId): Video {
    return this.repo.searchVideo(id);
  }
}
