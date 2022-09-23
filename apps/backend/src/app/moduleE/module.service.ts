import { Injectable } from '@nestjs/common';
import { ModuleEEntity } from './module.entity';

@Injectable()
export class ModuleEService {
  getData(): { message: string } {
    return { message: 'Welcome to module-e service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleEEntity();
    entity.foo = 'module-e-entity';
    entity.id = id;
    return entity;
  }
}
