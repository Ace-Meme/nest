import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return 4;
  }

  @Post()
  createHello(): string {
    return "Hohohoho";
  }
}
