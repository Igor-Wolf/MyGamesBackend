import express, { Request, Response } from "express";
import { getGameByIdService, metacriticGamesService, newReleasesService, searchGameService, topGamesAllTimeService, trendingGamesService } from "../services/games-service";


export const topGamesAllTime = async (req: Request, res: Response) => {
   

  const response = await topGamesAllTimeService()
  res.status(response.statusCode).json(response.body)


}
export const metacriticGames = async (req: Request, res: Response) => {
   

  const response = await metacriticGamesService()
  res.status(response.statusCode).json(response.body)


}
export const trendingGames = async (req: Request, res: Response) => {
   

  const response = await trendingGamesService()
  res.status(response.statusCode).json(response.body)


}
export const newReleases = async (req: Request, res: Response) => {
   

  const response = await newReleasesService()
  res.status(response.statusCode).json(response.body)


}
export const searchGame = async (req: Request, res: Response) => {
   
  const game = req.params.game

  const response = await searchGameService(game)
  res.status(response.statusCode).json(response.body)


}
export const getGameById = async (req: Request, res: Response) => {
   
  const id = req.params.id

  const response = await getGameByIdService(id)
  res.status(response.statusCode).json(response.body)


}
