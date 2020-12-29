import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {CreateVideo} from '../Application/CreateVideo'
import {SearchVideo} from '../Application/SearchVideo'
import { Video } from '../Domain/Video';
import { CreateVideoDTO } from '../Domain/CreateVideoDTO';

@Controller()
export class VideoController {
  constructor(private readonly createServ: CreateVideo, private readonly searchServ: SearchVideo) {}

  @Get(':id')
  getVideo(@Param('id') id: string): Video {
    return this.searchServ.search(id);
  }

  @Post()
  create(@Body() createVideoDto: CreateVideoDTO): void {
    this.createServ.create(createVideoDto.id, createVideoDto.title, createVideoDto.duration);
  }
}
