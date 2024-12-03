import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! mobeen ahmed new like it';
    return 'Hello World! mobeen ahmed new';
  }
}
