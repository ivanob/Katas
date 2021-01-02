import { Video } from './Video';
import { VideoId } from './VideoId';
import { VideoDuration } from './VideoDuration';

export interface IVideoRepository {
  createVideo(video: Video);
  searchVideo(id: VideoId);
  trimVideo(id: VideoId, newDuration: VideoDuration)
}
