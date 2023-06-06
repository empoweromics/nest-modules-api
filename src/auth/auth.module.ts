import { Module } from '@nestjs/common';
import { SigninController } from './signin/signin.controller';
import { SignupController } from './signup/signup.controller';
import { ResetController } from './reset/reset.controller';

@Module({
  controllers: [SigninController, SignupController, ResetController]
})
export class AuthModule {}
