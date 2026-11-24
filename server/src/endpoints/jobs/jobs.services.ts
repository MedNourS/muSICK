import type { z } from "zod";
import type { deleteSongsFromJobParamsSchema } from "./jobs.controller";
import type { getInfoOnJobParamsSchema } from "./jobs.controller";
import type { createAJobBodySchema } from "./jobs.controller";
import { rm, readdir } from "node:fs/promises";

export async function deleteSongsFromJob(
  params: z.infer<typeof deleteSongsFromJobParamsSchema>,
) {
  const dir = `/dev/shm/jobs/${params.id}`;

  await rm(dir, { recursive: true, force: true });

  return { success: true };
}

export async function getInfoOnJob(
  params: z.infer<typeof getInfoOnJobParamsSchema>,
) {
  const dir = `/dev/shm/jobs/${params.id}`;

  const entries = await readdir(dir, { withFileTypes: true });
  const count = entries.filter((entry) => entry.isFile()).length;

  return { count };
}

export async function createAJob(body: z.infer<typeof createAJobBodySchema>) {
  const id = crypto.randomUUID();
  const dir = `/dev/shm/jobs/${id}`;

  const job = Bun.spawn(["spotdl", "download", body.url, "--output", dir], {
    stdout: "inherit",
    stderr: "inherit",
  });

  return { id };
}
