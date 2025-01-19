import { Router } from "express"
import { autenticateAccountByEmail, createUser, deleteUser, forgotPass, getMyAcount, getProtegido, newPassword, updateUser, userAutentication } from "./controllers/login-controller"
import { getBanner, getDlcById, getGameById, getGameSeriesById, getParentGamesById, getScreenshotsById, metacriticGames, newReleases, searchGame, topGamesAllTime, trendingGames } from "./controllers/games-controller"
import { addGameList, addGameListDescription, addWishList, addWishListDescription, createUserList, deleteUserList, getUserGameList, getUserWishList, removeGameList, removeWishList } from "./controllers/myList-constroller"
import { getGameInfoById, getHistoryLogById, postPricesGeneralById, postPricesOverviewById, searchGamePrice } from "./controllers/prices-controller"


const router = Router()

//----------------------------------------------------------------------------------------------------------- USER ACCOUNT

//------------------------------------------------------------------------------------ GET

router.get("/login/protected", getProtegido)
router.get("/login/myAcount", getMyAcount)
router.get("/login/autenticateAccountEmail", autenticateAccountByEmail)
router.get("/login/forgotPassword/:email", forgotPass)


//------------------------------------------------------------------------------------ POST

router.post("/login/create", createUser)
router.post("/login/autentication", userAutentication)
router.post("/login/newPassword", newPassword)

//------------------------------------------------------------------------------------ PATCH

router.patch("/login/update/:user", updateUser)

//------------------------------------------------------------------------------------ DELETE

router.delete("/login/delete/:user", deleteUser)


//----------------------------------------------------------------------------------------------------------- GAMES


//------------------------------------------------------------------------------------ GET

router.get("/games/banner", getBanner)
router.get("/games/topGames", topGamesAllTime)
router.get("/games/metacriticGames", metacriticGames)
router.get("/games/trendingGames", trendingGames)
router.get("/games/releases", newReleases)
router.get("/games/searchGame/:game", searchGame)
router.get("/games/getGame/:id", getGameById)

router.get("/games/getDlc/:id", getDlcById) // lista de dlcs para jogos jogos -> dlc
router.get("/games/getGameSeries/:id", getGameSeriesById) // lista de jogos da mesma série
router.get("/games/getParentGames/:id", getParentGamesById) // lista de jogos que originou a dlc  dlc -> jogo
router.get("/games/getScreenshots/:id", getScreenshotsById) // lista de screenshots




//----------------------------------------------------------------------------------------------------------- MyList / Wishlist

//------------------------------------------------------------------------------------ GET

router.get("/myList/create", createUserList)



router.get("/myList/GameList", getUserGameList)

router.get("/myList/WishList", getUserWishList)

//------------------------------------------------------------------------------------ PATCH

router.patch("/myList/addGameList", addGameList)
router.patch("/myList/removeGameList/:id", removeGameList)
router.patch("/myList/addGameListDescription", addGameListDescription)


router.patch("/myList/addWishList", addWishList)
router.patch("/myList/removeWishList/:id", removeWishList)
router.patch("/myList/addWishListDescription", addWishListDescription)

//------------------------------------------------------------------------------------ DELETE

router.delete("/myList/delete", deleteUserList)


//----------------------------------------------------------------------------------------------------------- Prices



//------------------------------------------------------------------------------------ GET


router.get("/prices/search/:game", searchGamePrice)
router.get("/prices/game/:id", getGameInfoById)


router.get("/prices/historyLog/:id", getHistoryLogById) // precisa receber do front o country do navegador pela rota &country=BR


//------------------------------------------------------------------------------------ POST


router.post("/prices/overview/:country", postPricesOverviewById)
router.post("/prices/general/:country", postPricesGeneralById)



export default router