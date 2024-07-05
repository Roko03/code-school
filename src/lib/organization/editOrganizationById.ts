import { ACCESS_TOKEN } from "../../constants"
import { TAdminOrganizationSchema } from "../../pages/admin-organization-page/components/admin-organization-form/AdminOrganizationFormComponent"

export default async function editOrganizationById(data: TAdminOrganizationSchema, organizationId: number) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/organization/${organizationId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: "Nije moguće urediti organizaciju" }

    let jsonData = await response.json()

    return { success: true, message: "Organizacija uspješno uređena", data: jsonData }
}