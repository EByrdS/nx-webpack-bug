import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleDService {
  getData(): { message: string } {
    return { message: 'Welcome to module-d service!' };
  }
}
