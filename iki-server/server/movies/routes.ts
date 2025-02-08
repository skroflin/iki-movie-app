import { Router, Request, Response, NextFunction } from "express";
import { getAllMovies, getMovieById } from "./service";

const router = Router()

router.get("/", async function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await getAllMovies())
    } catch (e) {
        next(e)
    }
})

router.get("/:id", async function (req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        res.json(await getMovieById(id))
    } catch (e) {
        next(e)
    }
})

module.exports = router