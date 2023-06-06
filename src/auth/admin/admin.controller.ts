import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('auth/admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.adminService.signIn(signInDto.username, signInDto.password);
  }
}
