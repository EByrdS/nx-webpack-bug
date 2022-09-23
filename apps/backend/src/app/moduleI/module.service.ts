import { Injectable } from '@nestjs/common';
import { ModuleIEntity } from './module.entity';

@Injectable()
export class ModuleIService {
  getData(): { message: string } {
    return { message: 'Welcome to module-i service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleIEntity();
    entity.foo = 'module-i-entity';
    entity.id = id;
    return entity;
  }
}
