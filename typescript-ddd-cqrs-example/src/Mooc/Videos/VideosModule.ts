import { Module } from '@nestjs/common';
import { VideoController } from './Infraestructure/VideoController';
import { MemoryVideoRepository } from './Infraestructure/MemoryVideoRepository';
import { CommandBusInMemorySync } from 'src/Shared/Infraestructure/Bus/CommandBusInMemorySync';
import { CreateVideoCommand } from './Application/CreateVideoCommand';
import { CreateVideoHandler } from './Application/CreateVideoHandler';
import { CreateVideo } from './Application/CreateVideo';

@Module({
  controllers: [VideoController],
  providers: [
  { //Here is where I do the dependency injection, as Nestjs resolves de dependencies by name and can't infere by type
    provide: 'IVideoRepository',
    useClass: MemoryVideoRepository
  },{
    provide: 'ICommandBus',
    useValue: new CommandBusInMemorySync(new Map().set(CreateVideoCommand.name, new CreateVideoHandler(new CreateVideo(new MemoryVideoRepository()))))
  },
  {
    provide: 'IQueryBus',
    useClass: undefined
  }],
})
export class VideosModule {}