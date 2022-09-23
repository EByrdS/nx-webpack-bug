import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleHService {
  getData(): { message: string } {
    return { message: 'Welcome to module-h service!' };
  }
}
