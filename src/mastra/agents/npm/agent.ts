import { Agent } from '@mastra/core/agent';
import { openai } from '@ai-sdk/openai';

import { memory } from './memory.ts';
import { getPackageVersion, searchPackages } from '../../tools/npm-registry.ts';
import { instructions } from './instructions.ts';

export const npmAgent = new Agent({
  name: 'NPM Agent',
  instructions,
  model: openai('gpt-4o-mini'),
  tools: { getPackageVersion, searchPackages },
  memory,
});
