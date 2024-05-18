import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('CAT_SERVICE') private readonly catService: ClientProxy) {}

  healthCheck() {
    return { success: true };
  }

  async createCat() {
    return this.catService.send('create', { name: 'Kitty', age: 4 });
  }
}
