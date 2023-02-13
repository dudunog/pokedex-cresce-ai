import { adaptRoute } from "@main/adapters/express-adapter";
import { Router } from "express";
import { makeCreateAccount } from "../factories/create-account.factory";
import { makeAccessAccount } from "../factories/access-account.factory";

export default (router: Router) => {
  router.post("/signup", adaptRoute(makeCreateAccount()));
  router.post("/signin", adaptRoute(makeAccessAccount()));
};
