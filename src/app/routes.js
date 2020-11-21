import express from 'express';
import Test from './controllers/test';

const router = express.Router();

router.get('/test', Test.get);

export default router;
