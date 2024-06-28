import { ACCESS_TOKEN } from "../../constants"
import { TAdminUserSchema } from "../../pages/admin-user-page/components/admin-user-form/AdminUserFormComponent"

export default async function editUserById(userId: number, data: TAdminUserSchema) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/user/${userId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: "Nije moguće urediti korisnika" }

    let jsonData = await response.json()

    return { success: true, message: "Korisnik uspješno uređen", data: jsonData }
}