import { Video } from './Video';
import { VideoId } from './VideoId';

export interface IVideoRepository {
  createVideo(video: Video);
  searchVideo(id: VideoId)
}
