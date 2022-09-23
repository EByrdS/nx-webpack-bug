import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleIService {
  getData(): { message: string } {
    return { message: 'Welcome to module-i service!' };
  }
}
