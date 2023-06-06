import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { AnalysisModule } from './analysis/analysis.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MarketplaceModule, AuthModule, AdminModule, AnalysisModule, SharedModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
