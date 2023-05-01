const getModelForClass = require('@typegoose/typegoose').getModelForClass;
const prop = require('@typegoose/typegoose').prop;
// import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

class Default {
  @prop()
  public name?: string;

  @prop({ required: true })
  public age!: number; // This is a single Primitive

  @prop({ type: () => [String] })
  public preferences?: string[]; // This is a Primitive Array
}

const DefaultModel = getModelForClass(Default); // UserModel is a regular Mongoose Model with correct types
