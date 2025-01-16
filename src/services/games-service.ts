import { response } from "express";
import { noContent, ok } from "../utils/http-helper";
import { apiGames } from "../api/apiGames";
import {
  getDataAtual,
  getDataDoisAnosFuturo,
  getDataDoisMesesAtras,
} from "../utils/dateGames";
import { getBannerRepositories } from "../repositories/games-repository";

const key = process.env.KEY_GAMES;

export const topGamesAllTimeService = async () => {
  //populares mistura de nota no metacritc + popularidade
  const response1: any = await apiGames.get(
    `/games?key=${key}&ordering=-metacritic&page_size=20`
  );
  const response2: any = await apiGames.get(
    `/games?key=${key}&ordering=-added&page_size=20`
  );

  const lista: any = [
    ...new Set([...response1.data.results, ...response2.data.results]),
  ];

  const response = lista.filter(
    (item: any, index: any, self: any) =>
      index === self.findIndex((obj: any) => obj.id === item.id)
  );

  if (response) {
    const list = response;
    //console.log(JSON.stringify(list, null, 2));

    const mostAdded = list.filter(
      (item: any) => item.metacritic >= 85 && item.rating >= 4.3
    );

    mostAdded.sort(
      (a: any, b: any) =>
        //     //(b.ratings?.[0]?.count || 0) - (a.ratings?.[0]?.count || 0)
        (b.added || 0) - (a.added || 0)
    );
    const twentyMost = mostAdded.slice(0, 20);

    twentyMost.sort(() => Math.random() - 0.5);

    return ok(twentyMost);
  } else {
    return noContent();
  }
};
export const metacriticGamesService = async () => {
  const response: any = await apiGames.get(
    `/games?key=${key}&ordering=-metacritic&page_size=20`
  );

  if (response) {
    const metacritic = response.data.results;

    const twentyMost = metacritic;

    return ok(twentyMost);
  } else {
    return noContent();
  }
};
export const getBannerService = async () => {
  const database = await getBannerRepositories();

  if (database) {
    return ok(database);
  } else {
    return noContent();
  }
};
export const trendingGamesService = async () => {
  const datePast = await getDataDoisMesesAtras();
  const dataFuture = await getDataDoisAnosFuturo();

  const response: any = await apiGames.get(
    `/games?key=${key}&dates=${datePast},${dataFuture}&ordering=-added&page_size=20`
  );

  if (response) {
    const trending = response.data.results;

    const twentyMost = trending;

    return ok(twentyMost);
  } else {
    return noContent();
  }
};
export const newReleasesService = async () => {
  const dateNow = await getDataAtual();
  const dataFuture = await getDataDoisAnosFuturo();

  const response: any = await apiGames.get(
    `/games?key=${key}&dates=${dateNow},${dataFuture}&ordering=released&page_size=20`
  );

  if (response) {
    const newRelieases = response.data.results;

    const twentyMost = newRelieases;

    return ok(twentyMost);
  } else {
    return noContent();
  }
};
export const searchGameService = async (game: string) => {
  const response: any = await apiGames.get(
    `/games?key=${key}&search=${game}&page_size=20`
  );

  if (response) {
    const gameSearch = response.data.results;

    const twentyMost = gameSearch;

    return ok(twentyMost);
  } else {
    return noContent();
  }
};
export const getGameByIdService = async (id: string) => {
  const response: any = await apiGames.get(`/games/${id}?key=${key}`);

  if (response) {
    const gameSearch = response.data;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};
export const getDlcByIdService = async (id: string) => {
  const response: any = await apiGames.get(`/games/${id}/additions?key=${key}`);

  if (response) {
    const gameSearch = response.data.results;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};
export const getGameSeriesByIdService = async (id: string) => {
  const response: any = await apiGames.get(
    `/games/${id}/game-series?key=${key}`
  );

  if (response) {
    const gameSearch = response.data.results;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};
export const getParentGamesByIdService = async (id: string) => {
  const response: any = await apiGames.get(
    `/games/${id}/parent-games?key=${key}`
  );

  if (response) {
    const gameSearch = response.data.results;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};
export const getScreenshotsByIdService = async (id: string) => {
  const response: any = await apiGames.get(
    `/games/${id}/screenshots?key=${key}`
  );

  if (response) {
    const gameSearch = response.data.results;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};
