import { Mastra } from '@mastra/core';
import { npmAgent } from './agents/npm/agent.ts';
import { LangfuseExporter } from 'langfuse-vercel';

export const mastra = new Mastra({
  agents: { npmAgent },
  telemetry: {
    serviceName: 'ai', // this must be set to "ai" so that the LangfuseExporter thinks it's an AI SDK trace
    enabled: true,
    export: {
      type: 'custom',
      exporter: new LangfuseExporter({
        publicKey: process.env.LANGFUSE_PUBLIC_KEY,
        secretKey: process.env.LANGFUSE_SECRET_KEY,
        baseUrl: process.env.LANGFUSE_HOST,
      }),
    },
  },
});
