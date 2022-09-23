import { Injectable } from '@nestjs/common';
import { ModuleCEntity } from './module.entity';

@Injectable()
export class ModuleCService {
  getData(): { message: string } {
    return { message: 'Welcome to module-c service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleCEntity();
    entity.foo = 'module-c-entity';
    entity.id = id;
    return entity;
  }
}
