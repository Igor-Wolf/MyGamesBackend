import express, { Request, Response } from "express";
import {
  addGameListDescriptionService,
  addGameListService,
  addWishListDescriptionService,
  addWishListService,
  createNewUserListService,
  deleteUserListService,
  getUserGameListService,
  getUserWishListService,
  removeGameListService,
  removeWishListService,
} from "../services/myList-service";

export const getUserGameList = async (req: Request, res: Response) => {
  const user = req.headers.authorization;

  const response = await getUserGameListService(user);
  res.status(response.statusCode).json(response.body);
};
export const getUserWishList = async (req: Request, res: Response) => {
  const user = req.headers.authorization;

  const response = await getUserWishListService(user);
  res.status(response.statusCode).json(response.body);
};

export const createUserList = async (req: Request, res: Response) => {
  const user = req.headers.authorization;

  const response = await createNewUserListService(user);
  res.status(response.statusCode).json(response.body);
};

export const addGameList = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const bodyValue = req.body;

  const response = await addGameListService(bodyValue, authHeader);
  res.status(response.statusCode).json(response.body);
};
export const addWishList = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const bodyValue = req.body;

  const response = await addWishListService(bodyValue, authHeader);
  res.status(response.statusCode).json(response.body);
};
export const removeGameList = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const gameId  = parseInt(req.params.id);

  const response = await removeGameListService(gameId, authHeader);
  res.status(response.statusCode).json(response.body);
};
export const removeWishList = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const gameId  = parseInt(req.params.id);

  const response = await removeWishListService(gameId, authHeader);
  res.status(response.statusCode).json(response.body);
};

export const addGameListDescription = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const bodyValue = req.body;

  const response = await addGameListDescriptionService(bodyValue, authHeader);
  res.status(response.statusCode).json(response.body);
};
export const addWishListDescription = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const bodyValue = req.body;

  const response = await addWishListDescriptionService(bodyValue, authHeader);
  res.status(response.statusCode).json(response.body);
};


export const deleteUserList = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  const response = await deleteUserListService(authHeader);
  res.status(response.statusCode).json(response.body);
};
