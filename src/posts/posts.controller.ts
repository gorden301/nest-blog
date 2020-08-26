import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
    @ApiProperty({description: '帖子标题'})
    title: string;
    @ApiProperty({description: '帖子内容'})
    content: string;
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({summary: '显示博客列表'})
    index(): any[] {
        return [
            {
                id:1
            },
            {
                id:1
            },
            {
                id:1
            }
        ]
    }
    @Post()
    @ApiOperation({ summary: '创建帖子' })
    create(@Body() body: CreatePostDto, @Query() query, @Param() param) {

        return {
            success: true
        }
    }
    @Get(':id')
    detail(): object {
        return {
            id: 1,
            title: 'test'
        }
    }
}
