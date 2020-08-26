declare class CreatePostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): any[];
    create(body: CreatePostDto, query: any, param: any): {
        success: boolean;
    };
    detail(): object;
}
export {};
