import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleGService {
  getData(): { message: string } {
    return { message: 'Welcome to module-g service!' };
  }
}
