import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clubs')
@Controller('orders')
export class OrdersController {}
