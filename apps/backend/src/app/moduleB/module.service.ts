import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleBService {
  getData(): { message: string } {
    return { message: 'Welcome to module-b service!' };
  }
}
