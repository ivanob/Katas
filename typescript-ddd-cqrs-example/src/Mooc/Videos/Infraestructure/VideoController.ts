import { Controller, Get, Param, Post, Body, Inject } from '@nestjs/common';
import { CreateVideoDTO } from '../Domain/CreateVideoDTO';
import { CreateVideoCommand } from '../Application/CreateVideoCommand';
import { ICommandBus } from '../../../../src/Shared/Domain/Bus/Command/ICommandBus';
import { IQueryBus } from '../../../../src/Shared/Domain/Bus/Query/IQueryBus';
import { GetVideoQuery } from '../Application/GetVideoQuery'
import { IResponse } from '../../../../src/Shared/Domain/Bus/Query/IResponse';

@Controller()
export class VideoController {
  constructor(
    @Inject('ICommandBus') private readonly commandBus: ICommandBus, 
    @Inject('IQueryBus') private readonly queryBus: IQueryBus,
    @Inject('ICommandAsyncBus') private readonly commandBusAsync: ICommandBus
  ) {}

  @Get(':id')
  getVideo(@Param('id') id: string): IResponse {
    const getVideoQuery: GetVideoQuery = new GetVideoQuery(id);
    return this.queryBus.dispatch(getVideoQuery);
  }

  @Post()
  create(@Body() createVideoDto: CreateVideoDTO): void {
    const createVideoCommand: CreateVideoCommand = new CreateVideoCommand(createVideoDto.id, createVideoDto.title, createVideoDto.duration)
    //this.commandBus.dispatch(createVideoCommand);
    this.commandBusAsync
  }
}
