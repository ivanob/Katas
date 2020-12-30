import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Video } from '../Domain/Video';
import { CreateVideoDTO } from '../Domain/CreateVideoDTO';
import { CreateVideoCommand } from '../Application/CreateVideoCommand';
import { ICommandBus } from '../../../../src/Shared/Domain/Bus/Command/ICommandBus';
import { IQueryBus } from '../../../../src/Shared/Domain/Bus/Query/IQueryBus';
import { GetVideoQuery } from '../Application/GetVideoQuery'

@Controller()
export class VideoController {
  constructor(private readonly commandBus: ICommandBus, private readonly queryBus: IQueryBus) {}

  @Get(':id')
  getVideo(@Param('id') id: string): Video {
    const getVideoQuery: GetVideoQuery = new GetVideoQuery(id);
    return this.queryBus.dispatch(getVideoQuery);
  }

  @Post()
  create(@Body() createVideoDto: CreateVideoDTO): void {
    const createVideoCommand: CreateVideoCommand = new CreateVideoCommand(createVideoDto.id, createVideoDto.title, createVideoDto.duration)
    this.commandBus.dispatch(createVideoCommand);
  }
}
