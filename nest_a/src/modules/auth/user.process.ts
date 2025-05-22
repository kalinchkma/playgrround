import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('auth')
export class UserProcess extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    switch (job.name) {
      case 'create-user':
        console.info('create user process from worker', job.data);
    }
  }
}
