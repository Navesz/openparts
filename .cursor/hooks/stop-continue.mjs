import { readFileSync, existsSync, appendFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const input = JSON.parse(await readStdin());
const root = process.cwd();
const handoffPath = join(root, 'docs', 'HANDOFF.md');
const logDir = join(root, '.cursor', 'hooks', 'logs');
if (!existsSync(logDir)) mkdirSync(logDir, { recursive: true });

appendFileSync(
  join(logDir, 'stop.log'),
  `${new Date().toISOString()} stop ${JSON.stringify({ status: input.status, loop_count: input.loop_count })}\n`
);

// Never fight an abort/error stop.
if (input.status && input.status !== 'completed') {
  process.stdout.write('{}');
  process.exit(0);
}

if (!existsSync(handoffPath)) {
  process.stdout.write('{}');
  process.exit(0);
}

const handoff = readFileSync(handoffPath, 'utf8');
const auto = /^\s*auto_continue:\s*true\s*$/m.test(handoff);
const finished =
  /all alpha objectives complete/i.test(handoff) || /auto_continue:\s*false/i.test(handoff);

if (!auto || finished) {
  process.stdout.write('{}');
  process.exit(0);
}

const followup_message = [
  'CONTINUITY WAKE (stop hook): Continue Open Parts using ONLY docs/HANDOFF.md + docs/OBJECTIVES.md + AGENTS.md.',
  'Do not wait for the user. Do not re-ask architecture questions.',
  '1) Read docs/HANDOFF.md',
  '2) Execute the first incomplete Next action',
  '3) Commit the slice',
  '4) Update docs/HANDOFF.md (keep it short)',
  '5) Keep going until alpha is strong or auto_continue is set false',
  'Never invent OEM part numbers.'
].join(' ');

process.stdout.write(JSON.stringify({ followup_message }));

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8') || '{}';
}
