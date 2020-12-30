import { Module } from '@nestjs/common';
import { VideoController } from './Infraestructure/VideoController';
import { MemoryVideoRepository } from './Infraestructure/MemoryVideoRepository';
import { CommandBusInMemorySync } from 'src/Shared/Infraestructure/Bus/CommandBusInMemorySync';
import { QueryBusInMemorySync } from 'src/Shared/Infraestructure/Bus/QueryBusInMemorySync';
import { CreateVideoCommand } from './Application/CreateVideoCommand';
import { CreateVideoHandler } from './Application/CreateVideoHandler';
import { CreateVideo } from './Application/CreateVideo';
import { GetVideoQuery } from './Application/GetVideoQuery';
import { GetVideoHandler } from './Application/GetVideoHandler';
import { SearchVideo } from './Application/SearchVideo';

@Module({
  controllers: [VideoController],
  providers: [
  { //Here is where I do the dependency injection, as Nestjs resolves de dependencies by name and can't infere by type
    provide: 'IVideoRepository',
    useClass: MemoryVideoRepository
  },{
    provide: 'ICommandBus',
    useValue: new CommandBusInMemorySync(new Map()
    .set(CreateVideoCommand.name, new CreateVideoHandler(new CreateVideo(new MemoryVideoRepository()))))
  },
  {
    provide: 'IQueryBus',
    useValue: new QueryBusInMemorySync(new Map()
    .set(GetVideoQuery.name, new GetVideoHandler(new SearchVideo(new MemoryVideoRepository()))))
  }
  ],
})
export class VideosModule {}