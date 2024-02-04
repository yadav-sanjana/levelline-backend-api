import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/customization', (req: Request, res: Response) => {
  res.json({ message: 'Customization API endpoint' });
});

export default router;
