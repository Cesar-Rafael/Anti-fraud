import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('detect_fraud')
  detectFraud(data: any) {
    console.log('Data que viene de transaction nuevo: ');
    console.log(data);
    return this.appService.detectFraud(data);
  }
}
