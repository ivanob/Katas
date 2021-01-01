import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'
import { RequestCommandAsyncPooler } from './Shared/Infraestructure/RequestCommandAsyncPooler'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const poolAsyncReq = new RequestCommandAsyncPooler('serialized_commands.txt');
  (async () => { 
    poolAsyncReq.poolingProcess();
  })();
  await app.listen(3000);
}
bootstrap();
