import { response } from "express";
import {
  badRequest,
  conflict,
  noContent,
  ok,
  unauthorized,
} from "../utils/http-helper";
import { auth } from "../utils/auth";
import {
  addGameListDescriptionRepository,
  addGameListRepository,
  addWishListDescriptionRepository,
  addWishListRepository,
  createNewUserListRepository,
  deleteUserList,
  getUserGameListRepository,
  getUserWishListRepository,
  removeGameListRepository,
  removeWishListRepository,
} from "../repositories/myUserList-repository";
import { MyUserListGameModel } from "../models/myUserListGame-model";
import { MyUserListGameDescriptionModel } from "../models/myUserListGameDescriptionModel";

export const getUserGameListService = async (
  authHeader: string | undefined
) => {
  const decoded: any = await auth(authHeader);
  let response = null;

  if (decoded) {
    const data = await getUserGameListRepository(decoded.user);

    if (data) {
      response = await ok(data);
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};
export const getUserWishListService = async (
  authHeader: string | undefined
) => {
  const decoded: any = await auth(authHeader);
  let response = null;

  if (decoded) {
    const data = await getUserWishListRepository(decoded.user);

    if (data) {
      response = await ok(data);
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};
export const createNewUserListService = async (
  authHeader: string | undefined
) => {
  const decoded: any = await auth(authHeader);
  let response = null;

  if (decoded) {
    const data = await createNewUserListRepository(decoded.user);

    if (data) {
      response = await ok(data);
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};

export const addGameListService = async (
  bodyValue: MyUserListGameModel,
  authHeader: string | undefined
) => {
  const decoded: any = await auth(authHeader);
  let response = null;
  const user = decoded.user;

  if (decoded) {
    const data = await addGameListRepository(user, bodyValue);

    if (data.message === "updated") {
      response = await ok(data);
    } else if (data.message === "erro") {
      response = await conflict();
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};
export const addWishListService = async (
  bodyValue: MyUserListGameModel,
  authHeader: string | undefined
) => {
  const decoded: any = await auth(authHeader);
  let response = null;
  const user = decoded.user;

  if (decoded) {
    const data = await addWishListRepository(user, bodyValue);

    if (data.message === "updated") {
      response = await ok(data);
    } else if (data.message === "erro") {
      response = await conflict();
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};
export const removeGameListService = async (
  gameId: number,
  authHeader: string | undefined 
) => {
  const decoded: any = await auth(authHeader);
  let response = null;
  const user = await decoded?.user;
  console.log(user)
  console.log(decoded)

  if (decoded && user) {
    const data = await removeGameListRepository(user, gameId);

    if (data.message === "updated") {
      response = await ok(data);
    } else if (data.message === "erro") {
      response = await conflict();
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};
export const removeWishListService = async (
  gameId: number,
  authHeader: string | undefined
) => {
  const decoded: any = await auth(authHeader);
  let response = null;
  const user = decoded.user;

  if (decoded) {
    const data = await removeWishListRepository(user, gameId);

    if (data.message === "updated") {
      response = await ok(data);
    } else if (data.message === "erro") {
      response = await conflict();
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};

export const addGameListDescriptionService = async (
  bodyValue: MyUserListGameDescriptionModel,
  authHeader: string | undefined
) => {
  const decoded: any = await auth(authHeader);
  let response = null;
  const user = decoded.user;

  if (decoded) {
    const data = await addGameListDescriptionRepository(user, bodyValue);

    if (data.message === "updated") {
      response = await ok(data);
    } else if (data.message === "erro") {
      response = await conflict();
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};
export const addWishListDescriptionService = async (
  bodyValue: MyUserListGameDescriptionModel,
  authHeader: string | undefined
) => {
  const decoded: any = await auth(authHeader);
  let response = null;
  const user = decoded.user;

  if (decoded) {
    const data = await addWishListDescriptionRepository(user, bodyValue);

    if (data.message === "updated") {
      response = await ok(data);
    } else if (data.message === "erro") {
      response = await conflict();
    } else {
      response = await badRequest();
    }
  } else {
    response = await badRequest();
  }

  return response;
};

export const deleteUserListService = async (authHeader: string | undefined) => {
  const decoded: any = await auth(authHeader);
  const user: string = decoded.user;
  const data = await deleteUserList(user);
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await badRequest();
  }

  return response;
};
