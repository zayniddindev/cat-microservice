import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('APP')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  healthCheck() {
    return this.appService.healthCheck();
  }

  @Post('cat')
  async createCat() {
    return await this.appService.createCat();
  }
}
