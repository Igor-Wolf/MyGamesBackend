import express, { Request, Response } from "express";
import { getGameInfoByIdService, getHistoryLogByIdService, postPricesGeneralByIdService, postPricesOverviewByIdService, searchGamePriceService } from "../services/prices-services";


export const searchGamePrice = async (req: Request, res: Response) => {
  const game = req.params.game;

  const response = await searchGamePriceService(game);
  res.status(response.statusCode).json(response.body);
};


export const getGameInfoById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const response = await getGameInfoByIdService(id);
  res.status(response.statusCode).json(response.body);
};


export const getHistoryLogById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const response = await getHistoryLogByIdService(id);
  res.status(response.statusCode).json(response.body);
};



export const postPricesOverviewById = async (req: Request, res: Response) => {
    const id = req.body;
    const country = req.params.country;

    
  const response = await postPricesOverviewByIdService(id[0], country);
  res.status(response.statusCode).json(response.body);
};
export const postPricesGeneralById = async (req: Request, res: Response) => {
    const id = req.body;
    const country = req.params.country;

    
  const response = await postPricesGeneralByIdService(id[0], country);
  res.status(response.statusCode).json(response.body);
};