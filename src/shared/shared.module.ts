import { Module } from '@nestjs/common';
import { LocatoinsController } from './locatoins/locatoins.controller';

@Module({
  controllers: [LocatoinsController]
})
export class SharedModule {}
