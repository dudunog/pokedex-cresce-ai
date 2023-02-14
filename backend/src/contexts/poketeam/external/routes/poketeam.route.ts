import { adaptRoute } from "@main/adapters/express-adapter";
import { auth } from "@main/middlewares/auth";
import { Router } from "express";
import { makeCreatePoketeamFactory } from "../factories/create-poketeam.factory";
import { makeListPoketeamsFactory } from "../factories/list-poketeams.factory";

export default (router: Router) => {
  router.post("/poketeam/create", adaptRoute(makeCreatePoketeamFactory(), [auth]));
  router.get("/poketeams", adaptRoute(makeListPoketeamsFactory(), [auth]));
};
