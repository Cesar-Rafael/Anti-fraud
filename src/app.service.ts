import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { DetectFraudRequest } from './detect-fraud-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('TRANSACTION_SERVICE')
    private readonly transactionClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  detectFraud(detectFraudRequest: DetectFraudRequest) {
    const { value } = detectFraudRequest;

    if (value > 1000) {
      return 'rejected';
    }

    return 'approved';
  }

  detectFraudEvent() {
    this.transactionClient.emit('anti-fraud_status', { test: 2 });
  }
}
