import { Router } from 'express';
import EmailRouter from './Email';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/email', EmailRouter);

// Export the base-router
export default router;
