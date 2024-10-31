
    export interface Post {
        title: string;
        content: string;
        likes: number;
        authorName: string;
        authorEmail: string;
        comments: Comment[]; 
    }

    export interface Comment {
        body: string;
        createdDate: Date; 
        postId: number;
        authorName: string;
        authorEmail?: string | null;
    }

    export interface User {
        nickName: string;
        email: string;
        activo: boolean;
        password: string;
    }


