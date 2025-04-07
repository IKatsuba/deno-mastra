import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const getPackageVersion = createTool({
  id: 'getPackageVersion',
  description: 'Get the version of a npm package',
  inputSchema: z.object({
    name: z.string().describe(
      'The name of the npm package like "react" or "@angular/core"',
    ),
    version: z.string().describe(
      'The version or tag of the npm package like "18.2.0" or "latest"',
    ),
  }).describe('The name and version of the npm package'),
  execute: async ({ context }) => {
    const response = await fetch(
      `https://registry.npmjs.org/${encodeURIComponent(context.name)}/${
        encodeURIComponent(context.version)
      }`,
    );
    const data = await response.json();
    return data;
  },
});

export const searchPackages = createTool({
  id: 'searchPackages',
  description: 'Search for npm packages',
  inputSchema: z.object({ query: z.string() }).describe(
    "The query to search for like 'react' or 'angular'",
  ),
  execute: async ({ context }) => {
    const response = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${
        encodeURIComponent(context.query)
      }&size=10`,
    );
    const data = await response.json();
    return data;
  },
});
