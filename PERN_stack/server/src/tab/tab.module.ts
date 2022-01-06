import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabController } from './tab.controller';
import { TabService } from './tab.service';
import { Tab } from './tab.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Tab])],
    exports: [TypeOrmModule, TabService],
    providers: [TabService],
    controllers: [TabController], 
})
export class TabModule {}
