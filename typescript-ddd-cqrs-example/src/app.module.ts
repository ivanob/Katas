import { Module } from '@nestjs/common';
import { VideosModule } from './Mooc/Videos/VideosModule';

@Module({
  imports: [VideosModule],
})
export class AppModule {}