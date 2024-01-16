import {Router} from "express"
import { getUser, getUsers } from "../controllers/users.controllers.js"

const usersRouter = Router()

usersRouter.get("/",getUsers)

usersRouter.get("/:id",getUser)

usersRouter.get("/",(req,res) => {
    res.send("GET /users")
})

usersRouter.get ("/:id", (req,res) =>{
     res.send(`GET /users/${req.params.id}`)
})

export {usersRouter}