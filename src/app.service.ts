import { Injectable } from '@nestjs/common';
import { DetectFraudRequest } from './detect-fraud-request.dto';

@Injectable()
export class AppService {
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
}
