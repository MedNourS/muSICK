import { Hono } from "@mednours/backon";
import { jobsRoutes } from "./jobs/jobs.routes";

export const endpoints = new Hono();

endpoints.route("/jobs", jobsRoutes);
