import { Injectable } from '@nestjs/common';
import { ModuleHEntity } from './module.entity';

@Injectable()
export class ModuleHService {
  getData(): { message: string } {
    return { message: 'Welcome to module-h service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleHEntity();
    entity.foo = 'module-h-entity';
    entity.id = id;
    return entity;
  }
}
