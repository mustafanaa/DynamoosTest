import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { DynamooseConfigService } from './dynamose.config';

@Module({
  providers: [EntityService, DynamooseConfigService],
  controllers: [EntityController],
})
export class EntityModule {}
