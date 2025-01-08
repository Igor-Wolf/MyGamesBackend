import { Router } from "express"
import { autenticateAccountByEmail, createUser, deleteUser, forgotPass, getMyAcount, getProtegido, newPassword, updateUser, userAutentication } from "./controllers/login-controller"
import { getGameById, metacriticGames, newReleases, searchGame, topGamesAllTime, trendingGames } from "./controllers/games-controller"


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


router.get("/games/topGames", topGamesAllTime)
router.get("/games/metacriticGames", metacriticGames)
router.get("/games/trendingGames", trendingGames)
router.get("/games/releases", newReleases)
router.get("/games/searchGame/:game", searchGame)
router.get("/games/getGame/:id" , getGameById)




export default router