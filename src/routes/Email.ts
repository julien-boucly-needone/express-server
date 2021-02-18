import StatusCodes from 'http-status-codes';
import { Request, Response as ExpressRes, Router } from 'express';
import { ApiService } from '@shared/api/api.service';

const router = Router();
const { OK } = StatusCodes;

const apiService = new ApiService();


/******************************************************************************
 *                       Add One - "POST /api/email/send"
 ******************************************************************************/

router.post('/send', async (req: Request, res: ExpressRes): Promise<void> => {
    const { email, content } = req.body as unknown as { email: string, content: string };

    console.log({ email, content });
    const result = await apiService.pluginsApi.pluginsControllerPlugins({
        pluginsDtoIn: {
            body: content,
            email,
        }
    }).toPromise();

    console.log(result);

    return res.status(OK).end();
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
