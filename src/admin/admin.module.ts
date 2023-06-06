import { Module } from '@nestjs/common';
import { InsightsModule } from './insights/insights.module';
import { StockModule } from './stock/stock.module';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [InsightsModule, StockModule, WalletsModule]
})
export class AdminModule {}
