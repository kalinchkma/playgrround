/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { TaskType } from '@google/generative-ai';
import { QdrantVectorStore } from '@langchain/qdrant';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class QdrantService {
  private embeddings = new GoogleGenerativeAIEmbeddings({
    model: 'text-embedding-004',
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: 'Test',
  });
  private vectorstore: QdrantVectorStore;

  constructor() {
    void this.init();
  }

  async init() {
    this.vectorstore = await QdrantVectorStore.fromExistingCollection(
      this.embeddings,
      {
        url: process.env.QDRANT_HOST,
        collectionName: process.env.QDRANT_COLLECTION_NAME,
      },
    );
  }
}
