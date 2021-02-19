import { Router, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();
const { OK, INTERNAL_SERVER_ERROR } = StatusCodes;

let users: any;

// Open routes

router.post('/get-result-form-api', async (req: Request, res: any): Promise<void> => {
    const body = req.body;
    users = body;
    return res.status(OK).json(body).end();
});

// Another route

router.get('/get-users', (req: Request, res: any) => {
    if (users !== undefined) {
        return res.status(OK).json(users).end();
    } else {
        return res.status(INTERNAL_SERVER_ERROR).end();
    }
});


export default router;