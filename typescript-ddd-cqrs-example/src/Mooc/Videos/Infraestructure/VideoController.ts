import { Controller, Get, Param, Post, Body, Inject, Patch } from '@nestjs/common';
import { CreateVideoDTO } from '../Domain/CreateVideoDTO';
import { ModifyVideoDurationDTO } from '../Domain/ModifyVideoDurationDTO';
import { CreateVideoCommand } from '../Application/CreateVideoCommand';
import { ICommandBus } from '../../../../src/Shared/Domain/Bus/Command/ICommandBus';
import { IQueryBus } from '../../../../src/Shared/Domain/Bus/Query/IQueryBus';
import { GetVideoQuery } from '../Application/GetVideoQuery'
import { IResponse } from '../../../../src/Shared/Domain/Bus/Query/IResponse';
import { TrimVideoCommand } from '../Application/TrimVideoCommand';

@Controller()
export class VideoController {
  constructor(
    @Inject('ICommandBus') private readonly commandBus: ICommandBus, 
    @Inject('IQueryBus') private readonly queryBus: IQueryBus,
    @Inject('ICommandAsyncBus') private readonly asyncCommandBus: ICommandBus
  ) {}

  @Get(':id')
  getVideo(@Param('id') id: string): IResponse {
    const getVideoQuery: GetVideoQuery = new GetVideoQuery(id);
    return this.queryBus.dispatch(getVideoQuery);
  }

  @Post()
  create(@Body() createVideoDto: CreateVideoDTO): void {
    const createVideoCommand: CreateVideoCommand = new CreateVideoCommand(createVideoDto.id, createVideoDto.title, createVideoDto.duration)
    this.commandBus.dispatch(createVideoCommand);
  }

  @Patch()
  modifyVideo(@Body() modifyVideoDto: ModifyVideoDurationDTO): void {
    const trimVideoCmd: TrimVideoCommand = new TrimVideoCommand(modifyVideoDto.id, modifyVideoDto.duration);
    return this.asyncCommandBus.dispatch(trimVideoCmd);
  }
}
