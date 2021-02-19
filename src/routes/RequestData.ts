import { ApiService } from "@shared/api/api.service";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();
const { OK } = StatusCodes;
const apiService = new ApiService();


router.post('/log-data', async (req: Request, res: any): Promise<void> => {
    console.log('log-data');
    return res.status(OK).end();
});


router.post('/get-user-bubble', async (req: Request, res: any): Promise<void> => {
    console.log('get-user-bubble');
    return res.status(OK).end();
});

export default router;