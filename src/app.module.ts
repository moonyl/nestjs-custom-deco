import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './data.controller';
import { PermissionGuard } from './permission.guard';

@Module({
  imports: [],
  controllers: [AppController, DataController],
  providers: [AppService, PermissionGuard],
})
export class AppModule {}
