/// <reference types="vite/client" />

type UserType = {
    id: number;
    username: string;
    email: string;
    bio: string | null;
    role: 'adm' | 'stu' | 'prof';
}

type SnackBarType = {
    isOpen: boolean;
    message: string | null;
    type: "error" | "success" | null
}

type OrganizationType = {
    id: number,
    name: string;
    info: string;
    numb_of_users: number;
}

type Level = 'jun' | 'mid' | 'sen'

type Subject = 'rjs' | 'ex' | 'njs';

type WorkshopType = {
    id: number;
    name: string;
    time: string;
    info: string;
    level: Level;
    subject: Subject;
    user_id: number;
    user: UserType;
    numb_of_users: number;
}