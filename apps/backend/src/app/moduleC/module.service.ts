import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleCService {
  getData(): { message: string } {
    return { message: 'Welcome to module-c service!' };
  }
}
