import { Controller } from '@nestjs/common';
import { CatService } from './cat.service';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @MessagePattern('create')
  async create(@Payload() data: any, @Ctx() context: any) {
    console.log(data, context);
    return await this.catService.create();
  }
}
