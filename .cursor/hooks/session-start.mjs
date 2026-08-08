import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const handoffPath = join(root, 'docs', 'HANDOFF.md');
const objectivesPath = join(root, 'docs', 'OBJECTIVES.md');

let handoff = '(missing docs/HANDOFF.md)';
let objectives = '(missing docs/OBJECTIVES.md)';
if (existsSync(handoffPath)) handoff = readFileSync(handoffPath, 'utf8');
if (existsSync(objectivesPath)) objectives = readFileSync(objectivesPath, 'utf8');

const additional_context = [
  'OPEN PARTS CONTINUITY PACK (injected by sessionStart hook)',
  'You are resuming a long-running Open Parts build. Prefer this compact memory over chat history.',
  'Update docs/HANDOFF.md after every meaningful slice, then commit.',
  'Do not invent OEM numbers. Do not ask for permission between slices.',
  '',
  '===== docs/HANDOFF.md =====',
  handoff.slice(0, 12000),
  '',
  '===== docs/OBJECTIVES.md =====',
  objectives.slice(0, 8000)
].join('\n');

process.stdout.write(
  JSON.stringify({
    env: {
      OPENPARTS_CONTINUITY: '1',
      OPENPARTS_HANDOFF: 'docs/HANDOFF.md'
    },
    additional_context
  })
);
