import { response } from "express";
import {
  badRequest,
  conflict,
  noContent,
  ok,
  unauthorized,
} from "../utils/http-helper";
import { apiPrices } from "../api/apiGames";

const key = process.env.KEY_PRICES;

export const searchGamePriceService = async (game: string) => {
  const response: any = await apiPrices.get(
    `/search/v1?key=${key}&title=${game}`
  );

  if (response) {
    const gameSearch = response.data;

    const twentyMost = gameSearch;

    return ok(twentyMost);
  } else {
    return noContent();
  }
};

export const getGameInfoByIdService = async (id: string) => {
    const response: any = await apiPrices.get(
        `/info/v2?key=${key}&id=${id}`);

  if (response) {
    const gameSearch = response.data;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};
export const getHistoryLogByIdService = async (id: string) => {
    const response: any = await apiPrices.get(
        `/history/v2?key=${key}&id=${id}`);

  if (response) {
    const gameSearch = response.data;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};

export const postPricesOverviewByIdService = async (id: string , country: string) => {
    const response: any = await apiPrices.post(
        `/overview/v2?key=${key}&country=${country}`,
        [
        id
    ]);

  if (response) {
    const gameSearch = response.data;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};
export const postPricesGeneralByIdService = async (id: string , country: string) => {
    const response: any = await apiPrices.post(
        `/prices/v3?key=${key}&country=${country}`,
        [
        id
    ]);

  if (response) {
    const gameSearch = response.data;

    return ok(gameSearch);
  } else {
    return noContent();
  }
};
