import { appendFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const input = JSON.parse(await readStdin());
const root = process.cwd();
const logDir = join(root, '.cursor', 'hooks', 'logs');
if (!existsSync(logDir)) mkdirSync(logDir, { recursive: true });
appendFileSync(
  join(logDir, 'session-end.log'),
  `${new Date().toISOString()} sessionEnd ${JSON.stringify(input)}\n`
);
process.stdout.write('{}');

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8') || '{}';
}
