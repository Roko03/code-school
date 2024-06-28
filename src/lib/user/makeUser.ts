import { ACCESS_TOKEN } from "../../constants";
import { TAdminUserSchema } from "../../pages/admin-user-page/components/admin-user-form/AdminUserFormComponent";

export default async function makeUser(data: TAdminUserSchema) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/user/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false }

    return await response.json()
}