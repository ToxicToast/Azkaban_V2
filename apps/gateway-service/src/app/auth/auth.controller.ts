import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { DeviceCode, Verification } from './auth.type';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly httpService: HttpService) {}

  private async getAuthentikDeviceToken(): Promise<DeviceCode> {
    return await this.httpService
      .post(
        'https://auth.toxictoast.de/application/o/device/',
        {
          client_id: process.env.AUTHENTIK_CLIENT_ID,
          scope: 'openid email profile',
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .toPromise()
      .then((res) => {
        return res.data;
      })
      .catch((err) => err.response.data);
  }

  private async getToken(deviceCode: string): Promise<void> {
    return this.httpService
      .post(
        'https://auth.toxictoast.de/application/o/token/',
        {
          grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
          client_id: process.env.AUTHENTIK_CLIENT_ID,
          device_code: deviceCode,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .toPromise()
      .then((res) => res.data)
      .catch((err) => err.response.data);
  }

  @Post()
  async authentikOAuth(): Promise<Verification> {
    return await this.getAuthentikDeviceToken()
      .then((deviceCodeObject: DeviceCode) => {
        const { verification_uri_complete, device_code, user_code } =
          deviceCodeObject;
        return {
          verification_uri_complete,
          device_code,
          user_code,
        };
      })
      .catch(() => {
        return null;
      });
  }

  @Post('authenticate')
  async authenticate(@Body() body: { deviceCode: string }) {
    return await this.getToken(body.deviceCode);
  }
}
