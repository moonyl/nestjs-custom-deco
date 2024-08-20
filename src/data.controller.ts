import { Controller, Get, UseGuards } from '@nestjs/common';
import { PermissionGuard } from './permission.guard';
import { Permission } from './permission.decorator';

@Controller('data')
@UseGuards(PermissionGuard)
export class DataController {
  @Get('public')
  getPublicData() {
    return 'Public data';
  }

  @Get('protected')
  @Permission('read')
  getProtectedData() {
    return 'Protected data';
  }

  @Get('admin')
  @Permission('admin')
  getAdminData() {
    return 'Admin data';
  }
}
