import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleFService {
  getData(): { message: string } {
    return { message: 'Welcome to module-f service!' };
  }
}
