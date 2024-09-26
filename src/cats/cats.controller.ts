import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ApiBody, ApiConsumes, ApiHeader, ApiOperation, ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}
    @Get()
    @ApiOperation({description: "get all the cats"})
    @ApiProduces('404')
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post()
    @ApiConsumes('application/json')
    @ApiBody({type : CreateCatDto})
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: Cat})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
}
