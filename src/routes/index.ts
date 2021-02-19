import { Router } from 'express';
import EmailRouter from './Email';
import RequestData from './RequestData';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/email', EmailRouter);
router.use('/request-data', RequestData);

// Export the base-router
export default router;
