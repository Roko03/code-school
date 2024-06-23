/// <reference types="vite/client" />

type UserType = {
    id: number;
    username: string;
    email: string;
    bio: string;
    role: 'adm' | 'stu' | 'prof';
}