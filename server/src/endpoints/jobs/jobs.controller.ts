import { z } from "zod";
import { defineRoute } from "@mednours/backon";
import * as service from "./jobs.services";

export const deleteSongsFromJobParamsSchema = z.object({
  id: z.coerce.string().uuid(),
});
export const deleteSongsFromJob = defineRoute(
  { params: deleteSongsFromJobParamsSchema },
  async (c, { params }) => {
    const result = await service.deleteSongsFromJob(params);
    return c.json(result);
  },
);

export const getInfoOnJobParamsSchema = z.object({
  id: z.coerce.string().uuid(),
});
export const getInfoOnJob = defineRoute(
  { params: getInfoOnJobParamsSchema },
  async (c, { params }) => {
    const result = await service.getInfoOnJob(params);
    return c.json(result);
  },
);

export const createAJobBodySchema = z.object({
  url: z.coerce.string().url(),
});
export const createAJob = defineRoute(
  { body: createAJobBodySchema },
  async (c, { body }) => {
    const result = await service.createAJob(body);
    return c.json(result, 201);
  },
);
