import { Hono, type Env } from "@mednours/backon";
import * as controller from "./jobs.controller";

export const jobsRoutes = new Hono<Env>();

jobsRoutes.delete("/:id", controller.deleteSongsFromJob);

jobsRoutes.get("/:id", controller.getInfoOnJob);

jobsRoutes.post("/", controller.createAJob);
