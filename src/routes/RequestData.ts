import { MethodHttp, ServiceType } from "@sdk/models";
import { ApiService } from "@shared/api/api.service";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();
const { OK, INTERNAL_SERVER_ERROR } = StatusCodes;
const apiService = new ApiService();


router.post('/log-data', async (req: Request, res: any): Promise<void> => {
    try {
        await apiService.pluginsApi.pluginsControllerRequestData({
            pluginRequestDataDtoIn: {
                // Useless here but required
                pluginConfig: {
                    method: MethodHttp.POST,
                    name: 'express-server-test',
                    url: 'http://localhost',
                },
                pluginData: {
                    serviceType: ServiceType.LOG_DATA,
                    serviceData: {
                        logDataModel: {
                            dataToLog: 'I\'m logging something and not expecting any return data',
                        },
                    },
                },
            },
        }).toPromise();

        return res.status(OK).end();
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json(error.response).end();
    }
});


router.post('/get-user-bubble', async (req: Request, res: any): Promise<void> => {
    try {
        await apiService.pluginsApi.pluginsControllerRequestData({
            pluginRequestDataDtoIn: {
                pluginConfig: {
                    method: MethodHttp.POST,
                    name: 'express-server-test',
                    url: 'http://36db18753a49.ngrok.io/api/test/get-result-form-api',
                },
                pluginData: {
                    serviceType: ServiceType.GET_USER_BUBBLE,
                    serviceData: {
                        getUserBubbleModel: {
                            bubbleId: 'b2c1f43e-d198-4282-829e-8231e0f263b6'
                        }
                    },
                },
            },
        }).toPromise();

        return res.status(OK).end();
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json(error.response).end();
    }

});

export default router;