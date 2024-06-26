import * as dynamoose from 'dynamoose';

export const EntitySchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  propertyName: {
    type: String,
    index: {
      global: true,
      name: 'propertyNameIndex',
    },
  },
  // Add other attributes here
});
