import { CreateVideo } from '../../../src/Mooc/Videos/Application/CreateVideo';
import { VideoId } from '../../../src/Mooc/Videos/Domain/VideoId';
import { VideoTitle } from '../../../src/Mooc/Videos/Domain/VideoTitle';
import { VideoDuration } from '../../../src/Mooc/Videos/Domain/VideoDuration';

describe('Test for the createVideo application service', () => {
  let videoCreateService: CreateVideo;
  const videoRepository = { createVideo: jest.fn(), searchVideo: jest.fn() };

  beforeEach(async () => {
    videoCreateService = new CreateVideo(videoRepository)
  });

  it('Should create a video when the arguments passed are correct', () => {
    //Arrange
    const videoId: VideoId = '1';
    const videoTitle: VideoTitle = 'Title1';
    const videoDuration: VideoDuration = 5;
    //Act
    videoCreateService.create(videoId, videoTitle, videoDuration)
    //Assert
    expect(videoRepository.createVideo).toHaveBeenCalledTimes(1);
  });
});
