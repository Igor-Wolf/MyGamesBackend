import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { MyUserListModel } from "../models/myUserList-model";
import { MyUserListGameModel } from "../models/myUserListGame-model";
import { MyUserListGameDescriptionModel } from "../models/myUserListGameDescriptionModel";

// Carregar variáveis de ambiente
dotenv.config();

// Configuração da conexão MongoDB
const uri: string = process.env.MONGO_URI;
const client = new MongoClient(uri);
let cachedDb: any = null;

// Conectar ao banco de dados (reutilizando a conexão se já estiver aberta)
const connectDatabase = async () => {
  if (cachedDb) {
    return cachedDb;
  }

  await client.connect();
  const database = client.db(process.env.DATABASE);
  cachedDb = database.collection(process.env.COLLECTION_LIST);
  return cachedDb;
};

// Fechar a conexão com o banco de dados
const closeDatabase = async () => {
  if (client) {
    await client.close();
  }
};

// -------------------------------------------------------- GET / READ

export const getUserGameListRepository = async (value: string) => {
  const collection = await connectDatabase();
  const filter = { user: value };
  const result = await collection.findOne(filter);

  if (result) {
    return result.gameList;
  }
  return;
};

export const getUserWishListRepository = async (value: string) => {
  const collection = await connectDatabase();
  const filter = { user: value };
  const result = await collection.findOne(filter);

  if (result) {
    return result.wishList;
  }
  return;
};

// -------------------------------------------------------- INSERT (Create)

export const createNewUserListRepository = async (value: string) => {
  const collection = await connectDatabase();
  const filter = { user: value };
  const result = await collection.findOne(filter);

  if (!result) {
    const myUserList: MyUserListModel = {
      user: value,
      gameList: [],
      wishList: [],
    };

    await collection.insertOne(myUserList);
    return { message: "created" };
  }
  return;
};

// -------------------------------------------------------- DELETE

export const deleteUserList = async (user: string) => {
  const collection = await connectDatabase();

  try {
    const filter = { user: user };
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 1) {
      return { message: "deleted" };
    } else {
      return { message: "not found" };
    }
  } catch (error) {
    return { message: "error", error: error.message };
  }
};

// -------------------------------------------------------- UPDATE

export const addGameListRepository = async (
  user: string,
  body: MyUserListGameModel
) => {
  const collection = await connectDatabase();
  const id = body.id;
  try {
    const filter = { user: user };
    const filterGame = { "gameList.id": id };

    const result1 = await collection.findOne(filter);
    const result2 = await collection.findOne(filterGame);
    if (result1 && !result2) {
      const updateList = { $push: { gameList: body } };
      const result = await collection.updateOne(filter, updateList);

      if (result.modifiedCount > 0) {
        return { message: "updated" };
      } else {
        return { message: "erro" };
      }
    } else {
      return { message: "erro" };
    }
  } catch (error) {
    return { message: "error", error: error.message };
  }
};
export const addWishListRepository = async (
  user: string,
  body: MyUserListGameModel
) => {
  const collection = await connectDatabase();
  const id = body.id;
  try {
    const filter = { user: user };
    const filterGame = { "wishList.id": id };

    const result1 = await collection.findOne(filter);
    const result2 = await collection.findOne(filterGame);
    if (result1 && !result2) {
      const updateList = { $push: { wishList: body } };
      const result = await collection.updateOne(filter, updateList);

      if (result.modifiedCount > 0) {
        return { message: "updated" };
      } else {
        return { message: "erro" };
      }
    } else {
      return { message: "erro" };
    }
  } catch (error) {
    return { message: "error", error: error.message };
  }
};

export const removeGameListRepository = async (user: string, body: number) => {
  const collection = await connectDatabase();
  const id = body;
  try {
    const filter = { user: user };
    const filterGame = { "gameList.id": id };

    const result1 = await collection.findOne(filter);
    const result2 = await collection.findOne(filterGame);
    console.log(result2);
    if (result1 && result2) {
      const updateList = { $pull: { gameList: result2.gameList[0] } };
      const result = await collection.updateOne(filter, updateList);

      if (result.modifiedCount > 0) {
        return { message: "updated" };
      } else {
        return { message: "erro" };
      }
    } else {
      return { message: "erro" };
    }
  } catch (error) {
    return { message: "error", error: error.message };
  }
};
export const removeWishListRepository = async (user: string, body: number) => {
  const collection = await connectDatabase();
  const id = body;
  try {
    const filter = { user: user };
    const filterGame = { "wishList.id": id };

    const result1 = await collection.findOne(filter);
    const result2 = await collection.findOne(filterGame);
    console.log(result2);
    if (result1 && result2) {
      const updateList = { $pull: { wishList: result2.wishList[0] } };
      const result = await collection.updateOne(filter, updateList);

      if (result.modifiedCount > 0) {
        return { message: "updated" };
      } else {
        return { message: "erro" };
      }
    } else {
      return { message: "erro" };
    }
  } catch (error) {
    return { message: "error", error: error.message };
  }
};

export const addGameListDescriptionRepository = async (
  user: string,
  body: MyUserListGameDescriptionModel
) => {
  const collection = await connectDatabase();
  const id = body.id;
  const description = body.description;
  try {
    console.log("repository");
    const result = await collection.updateOne(
      { user: user, "gameList.id": id }, // Filtro
      {
        $set: {
          "gameList.$.description": description, // Atualiza a descrição
        },
      }
    );
    if (result.modifiedCount > 0) {
      return { message: "updated" };
    } else {
      return { message: "erro" };
    }
  } catch (error) {
    return { message: "error", error: error.message };
  }
};
export const addWishListDescriptionRepository = async (
  user: string,
  body: MyUserListGameDescriptionModel
) => {
  const collection = await connectDatabase();
  const id = body.id;
  const description = body.description;
  try {
    console.log("repository");
    const result = await collection.updateOne(
      { user: user, "wishList.id": id }, // Filtro
      {
        $set: {
          "wishList.$.description": description, // Atualiza a descrição
        },
      }
    );
    if (result.modifiedCount > 0) {
      return { message: "updated" };
    } else {
      return { message: "erro" };
    }
  } catch (error) {
    return { message: "error", error: error.message };
  }
};
