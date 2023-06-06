import { Module } from '@nestjs/common';
import { SigninController } from './signin/signin.controller';
import { SignupController } from './signup/signup.controller';
import { ResetController } from './reset/reset.controller';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    SigninController,
    SignupController,
    ResetController,
    AdminController,
  ],
  providers: [AdminService],
})
export class AuthModule {}
