import { ReportModel, IReport } from '../models/report-model'

export const createReport = async (body: IReport): Promise<IReport> => {
    let report = new ReportModel(body);
    await report.save();
    return report;
}

export const getReportById = async (id: string) => {
    return await ReportModel.findById(id);
}

export const getReports = async () => {
    return await ReportModel.find({});
}