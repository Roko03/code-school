/// <reference types="vite/client" />

type UserType = {
    id: number;
    username: string;
    email: string;
    bio: string | null;
    role: 'adm' | 'stu' | 'prof';
}