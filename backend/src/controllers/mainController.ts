// src/controllers/mainController.ts
import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response): void => {
  res.send('Welcome to the Home Page');
};

export const getAbout = (req: Request, res: Response): void => {
  res.send('About Us');
};
