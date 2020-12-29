import { MemoryVideoRepository } from '../../../src/Mooc/Videos/Infraestructure/MemoryVideoRepository';
import { VideoId } from '../../../src/Mooc/Videos/Domain/VideoId';
import { VideoTitle } from '../../../src/Mooc/Videos/Domain/VideoTitle';
import { VideoDuration } from '../../../src/Mooc/Videos/Domain/VideoDuration';
import { Video } from '../../../src/Mooc/Videos/Domain/Video';

describe('Test for the MemoryVideoRepository adapter', () => {
  let memVideoRepo: MemoryVideoRepository;

  beforeEach(async () => {
    memVideoRepo = new MemoryVideoRepository()
  });

  it('Should store a video in the repo and being able to retrieve it', () => {
    //Arrange
    const videoId: VideoId = '1';
    const videoTitle: VideoTitle = 'Title1'
    const videoDuration: VideoDuration = 5;
    const video = new Video(videoId, videoTitle, videoDuration);
    //Act
    memVideoRepo.createVideo(video);
    //Assert
    expect(memVideoRepo.searchVideo(videoId)).toEqual(video);
  });

  it('Should throw an Error when trying to access a Video does not exist on the repo', () => {
    //Act + Assert
    expect(memVideoRepo.searchVideo).toThrowError();
  })
});
