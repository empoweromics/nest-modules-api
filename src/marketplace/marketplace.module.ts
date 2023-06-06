import { Module } from '@nestjs/common';
import { SearchController } from './search/search.controller';
import { SellController } from './sell/sell.controller';

@Module({
  controllers: [SearchController, SellController]
})
export class MarketplaceModule {}
