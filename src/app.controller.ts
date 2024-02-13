import { Controller, Get,Req,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('giph/:q')
  async getGiph(
    @Param('q') q: string
  ):
   Promise<string> {
    console.log('el q: ' + q)
    const api_key= "oy5WoJCYpGcZe3cYmmFvEydLBVSZamUR";


    return this.appService.getGiph(api_key, q);
  }

  @Get()
  getGoodBye(): string{
    return this.appService.getGoodBye();
  }
}
