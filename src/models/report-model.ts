import * as mongoose from 'mongoose';

export interface IReport {
  name: string;
  status: boolean;
  recipinents?: string[];
}

const reportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
  recipinents: [{ type: String }],
}); // Create a new mongoose schema

export const ReportModel = mongoose.model('Report', reportSchema); // UserModel is a regular Mongoose Model with correct types
