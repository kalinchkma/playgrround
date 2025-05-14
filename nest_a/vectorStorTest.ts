/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { QdrantVectorStore } from '@langchain/qdrant';
import type { Document } from '@langchain/core/documents';
import * as dotenv from 'dotenv';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { TaskType } from '@google/generative-ai';

dotenv.config();

const embeddings = new GoogleGenerativeAIEmbeddings({
  apiKey: process.env.GOOGLE_API_KEY,
  model: 'text-embedding-004',
  taskType: TaskType.RETRIEVAL_DOCUMENT,
  title: 'Test',
});

let vectorStore: QdrantVectorStore;

async function init() {
  vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
    url: `${process.env.QDRANT_HOST}:${process.env.QDRANT_PORT}`,
    collectionName: 'langchainjs-testing',
  });
}

const document1: Document = {
  pageContent: 'The powerhouse of the cell is the mitochondria',
  metadata: { source: 'https://example.com' },
};

const document2: Document = {
  pageContent: 'Buildings are made out of brick',
  metadata: { source: 'https://example.com' },
};

const document3: Document = {
  pageContent: 'Mitochondria are made out of lipids',
  metadata: { source: 'https://example.com' },
};

const document4: Document = {
  pageContent: 'The 2024 Olympics are in Paris',
  metadata: { source: 'https://example.com' },
};

const documents = [document1, document2, document3, document4];

async function main() {
  await init();
  await vectorStore.addDocuments(documents);

  const filter = {
    must: [{ key: 'metadata.source', match: { value: 'https://example.com' } }],
  };

  const similaritySearchResults = await vectorStore.similaritySearch(
    'biology',
    2,
    filter,
  );

  console.info(similaritySearchResults);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
