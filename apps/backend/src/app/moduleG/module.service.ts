import { Injectable } from '@nestjs/common';
import { ModuleGEntity } from './module.entity';

@Injectable()
export class ModuleGService {
  getData(): { message: string } {
    return { message: 'Welcome to module-g service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleGEntity();
    entity.foo = 'module-g-entity';
    entity.id = id;
    return entity;
  }
}
