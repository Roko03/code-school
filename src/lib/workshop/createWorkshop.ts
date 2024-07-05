import { ACCESS_TOKEN } from "../../constants"
import { TAdminWorkshopSchema } from "../../pages/admin-workshop-page/components/admin-workshop-form/AdminWorkshopFormComponent"

export default async function createWorkshop(data: TAdminWorkshopSchema) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/workshop/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: "Nije moguće kreirati radionicu" }

    let jsonData = await response.json()

    return { success: true, message: "Uspješno kreirana radionica", data: jsonData }
}