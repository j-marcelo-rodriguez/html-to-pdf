import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfsModule } from './pdfs/pdfs.module';

@Module({
  imports: [PdfsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
