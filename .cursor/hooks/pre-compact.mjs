import { appendFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const input = JSON.parse(await readStdin());
const root = process.cwd();
const logDir = join(root, '.cursor', 'hooks', 'logs');
if (!existsSync(logDir)) mkdirSync(logDir, { recursive: true });
const line = `${new Date().toISOString()} preCompact ${JSON.stringify(input)}\n`;
appendFileSync(join(logDir, 'precompact.log'), line);

const pct = input.context_usage_percent ?? '?';
process.stdout.write(
  JSON.stringify({
    user_message: `Open Parts: context compacting (~${pct}%). Continuity lives in docs/HANDOFF.md — agent should refresh that file before continuing.`
  })
);

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8') || '{}';
}
