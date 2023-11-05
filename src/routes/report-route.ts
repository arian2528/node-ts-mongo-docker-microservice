import * as express from 'express';
import { Request, Response } from 'express';
import { createReport, getReportById, getReports } from '../controllers/report-ctrl';

const router = express.Router();

router.get('/report-router', (req, res) => {
    res.send('Hello from express report router');
});

router.post('/report', async (req: Request, res: Response) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({ success: false, error: 'You must provide a report' })
    }
    try {
        const report = await createReport(body);
        return res.status(201).json(report);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/report', async (req: Request, res: Response) => {
    try {
        const reports = await getReports();
        if (!reports.length) {
            return res
                .status(404)
                .json({ success: false, error: `Reports not found` })
        }
        return res.status(200).json(reports);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/report/:id', async (req: Request, res: Response) => {
    try {
        const report = await getReportById(req.params.id);
        if (!report) {
            return res
                .status(404)
                .json({ success: false, error: `Report not found` })
        }
        return res.status(200).json(report);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;