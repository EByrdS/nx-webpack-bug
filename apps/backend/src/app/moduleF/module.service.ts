import { Injectable } from '@nestjs/common';
import { ModuleFEntity } from './module.entity';

@Injectable()
export class ModuleFService {
  getData(): { message: string } {
    return { message: 'Welcome to module-f service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleFEntity();
    entity.foo = 'module-f-entity';
    entity.id = id;
    return entity;
  }
}
