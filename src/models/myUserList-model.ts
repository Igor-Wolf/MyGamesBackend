import { MyUserListGameModel } from "./myUserListGame-model";

export interface MyUserListModel {

    user: string;
    gameList: MyUserListGameModel[]
    wishList: MyUserListGameModel[]
        

}