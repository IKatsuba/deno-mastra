import { Mastra } from '@mastra/core';
import { npmAgent } from './agents/npm/agent.ts';

export const mastra = new Mastra({
  agents: { npmAgent },
});
