import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from '../../../src/Mooc/Videos/Infraestructure/VideoController';
import { SearchVideo } from '../../../src/Mooc/Videos/Application/SearchVideo';
import { CreateVideo } from '../../../src/Mooc/Videos/Application/createVideo';
import { Video } from '../../../src/Mooc/Videos/Domain/Video';
import { VideoId } from '../../../src/Mooc/Videos/Domain/VideoId';
import { CreateVideoDTO } from '../../../src/Mooc/Videos/Domain/CreateVideoDTO';

describe.skip('VideoController', () => {
  let videoController: VideoController;
  const mockVideo = new Video('2', 'abc', 60);
  /* This mock represents the MemoryVideoRepository, that is used by the controller
   in its injected application services: CreateVideo and SearchVideo */
  const memoryRepoMock: jest.Mock = jest.fn((): {} => ({
    createVideo: (video: Video): void => {
      return;
    },
    searchVideo: (videoId: VideoId): Video => {
        if(videoId === '2'){
            return mockVideo
        }
        return undefined;
      }
  }));

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VideoController],
      providers: [SearchVideo, CreateVideo, {
        provide: 'IVideoRepository', //I inject the dependency manually here
        useClass: memoryRepoMock
      }],
    }).compile();

    videoController = app.get<VideoController>(VideoController);
  });

  describe('getVideo()', () => {
    it('should return undefined if we try to GET a video that does not exist', () => {
      expect(videoController.getVideo('1')).toBe(undefined);
    });

    it('should return a valid Video if we try to GET a video that exists', () => {
        expect(videoController.getVideo('2')).toEqual(mockVideo);
      });
  });

  describe('create()', () => {
    it('should create a valid video that is passed via POST', () => {
      //Arrange
      const dtoCreate = new CreateVideoDTO('1', 'abc', 60)
      //Act + Assert
      expect(videoController.create(dtoCreate)).toBe(undefined);
    });

  });
});
