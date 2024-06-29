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
