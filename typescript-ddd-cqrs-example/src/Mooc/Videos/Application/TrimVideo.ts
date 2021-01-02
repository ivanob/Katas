import { Injectable, Inject } from "@nestjs/common";
import { IVideoRepository } from "../Domain/IVideoRepository";
import { VideoId } from "../Domain/VideoId";
import { VideoDuration } from "../Domain/VideoDuration";

@Injectable()
export class TrimVideo {
  constructor(@Inject('IVideoRepository') private repo: IVideoRepository) {}

  trim(id: VideoId, newDuration: VideoDuration) {
    this.repo.trimVideo(id, newDuration);
  }
}
