import { Controller, Get, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
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
    create() {
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
