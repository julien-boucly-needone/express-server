import StatusCodes from 'http-status-codes';
import { Request, Response as ExpressRes, Router } from 'express';
import { ApiService } from '@shared/api/api.service';
import FormData from "formdata-node"

// Hack for FormData
(global as any).FormData = FormData;

const router = Router();
const { OK } = StatusCodes;

const apiService = new ApiService();


/******************************************************************************
 *                       Add One - "POST /api/email/send"
 ******************************************************************************/

router.post('/send', async (req: Request, res: ExpressRes): Promise<void> => {
    const { email, content } = req.body as unknown as { email: string, content: string };

    const result = await apiService.pluginsApi.pluginsControllerPlugins({
        pluginsDtoIn: {
            body: content,
            email,
        }
    }).toPromise();

    return res.status(OK).json(result).end();
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
