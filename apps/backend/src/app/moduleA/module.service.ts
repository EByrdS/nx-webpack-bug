import { Injectable } from '@nestjs/common';
import { ModuleAEntity } from './module.entity';

@Injectable()
export class ModuleAService {
  getData(): { message: string } {
    return { message: 'Welcome to module-a service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleAEntity();
    entity.foo = 'module-a-entity';
    entity.id = id;
    return entity;
  }
}
