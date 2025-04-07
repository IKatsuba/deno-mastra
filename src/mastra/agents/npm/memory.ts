import { LibSQLStore } from '@mastra/core/storage/libsql';
import { LibSQLVector } from '@mastra/core/vector/libsql';
import { Memory } from '@mastra/memory';

const storage = new LibSQLStore({
  config: {
    url: 'file:./.mastra/memory.db',
  },
});

const vector = new LibSQLVector({
  connectionUrl: 'file:./.mastra/vector.db',
});

export const memory = new Memory({
  storage,
  vector,
});
