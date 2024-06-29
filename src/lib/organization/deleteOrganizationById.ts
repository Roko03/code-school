import { ACCESS_TOKEN } from "../../constants"

export default async function deleteOrganizationById(organizationId: number) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/organization/${organizationId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        }
    })

    if (!response.ok) return { success: false, message: "Nije moguće izbrisati organizaciju" }

    const jsonData = await response.json()
    return { success: true, message: "Organizacija uspješno izbrisana", data: jsonData }
}