import { Router } from 'express';
import EmailRouter from './Email';
import RequestData from './RequestData';
import TestRouter from './Test';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/email', EmailRouter);
router.use('/request-data', RequestData);
router.use('/test', TestRouter);

// Export the base-router
export default router;
