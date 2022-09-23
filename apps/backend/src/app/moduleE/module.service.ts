import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleEService {
  getData(): { message: string } {
    return { message: 'Welcome to module-e service!' };
  }
}
