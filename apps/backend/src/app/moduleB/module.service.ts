import { Injectable } from '@nestjs/common';
import { ModuleBEntity } from './module.entity';

@Injectable()
export class ModuleBService {
  getData(): { message: string } {
    return { message: 'Welcome to module-b service!' };
  }

  getEntity(id: number) {
    const entity = new ModuleBEntity();
    entity.foo = 'module-b-entity';
    entity.id = id;
    return entity;
  }
}
