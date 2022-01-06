import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'

import { Tab } from './tab/tab.entity'
import { TabService } from './tab/tab.service';
import { TabModule } from './tab/tab.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'mytest',
    entities: [Tab],
    synchronize: true,
    }),
    TabModule,
  ],
  controllers: [AppController],
  providers: [AppService, TabService],
})
export class AppModule {}
