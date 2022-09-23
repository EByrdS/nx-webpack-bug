import { Injectable } from '@nestjs/common';
import { ModuleDEntity } from './module.entity';

@Injectable()
export class ModuleDService {
  getData(): { message: string } {
    return { message: 'Welcome to module-d service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleDEntity();
    entity.foo = 'module-d-entity';
    entity.id = id;
    return entity;
  }
}
