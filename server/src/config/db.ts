// No database configured yet. Wire up a real client here — e.g. one of
// the neon/postgres/sqlite variants this CLI can also generate — and
// export it as `db`. Any service file can then do
// `import { db } from "#config/db";` (see package.json's "imports" field
// and the README's Database section) regardless of how deep it's nested.

export const db = undefined;
