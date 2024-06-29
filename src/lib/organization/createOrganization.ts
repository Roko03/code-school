import { ACCESS_TOKEN } from "../../constants"
import { TAdminOrganizationSchema } from "../../pages/admin-organization-page/components/admin-organization-form/AdminOrganizationFormComponent"


export default async function createOrganization(data: TAdminOrganizationSchema) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/organization/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: "Nije moguće kreirati organizaciju" }

    let jsonData = await response.json()

    return { success: true, message: "Uspješno kreirana organizacija", data: jsonData }
}