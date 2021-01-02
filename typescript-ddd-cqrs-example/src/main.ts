import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'
import { RequestCommandAsyncPooler } from './Shared/Infraestructure/RequestCommandAsyncPooler'
import { memoryVideoRepo } from './Mooc/Videos/VideosModule'
import { TrimVideoHandler } from './Mooc/Videos/Application/TrimVideoHandler';
import { TrimVideo } from './Mooc/Videos/Application/TrimVideo';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const poolAsyncReq = new RequestCommandAsyncPooler('serialized_commands.txt', new TrimVideoHandler(new TrimVideo(memoryVideoRepo)) );
  (async () => { 
    poolAsyncReq.poolingProcess();
  })();
  await app.listen(3000);
}
bootstrap();
