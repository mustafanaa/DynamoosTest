import { Injectable } from '@nestjs/common';
import { Model } from 'dynamoose';
import { EntitySchema } from '../schemas/entity.schema';

@Injectable()
export class EntityService {
  private entityModel: Model<any>;

  constructor() {
    this.entityModel = dynamoose.model('Entity', EntitySchema);
  }

  async findOne(id: string): Promise<any> {
    try {
      const response = await this.entityModel.get(id);
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getBy(propertyName: string, index: string, value: any, limit?: number): Promise<any[]> {
    const query = this.entityModel.query(propertyName).eq(value).using(index).limit(limit);
    try {
      const response = await query.exec();
      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
