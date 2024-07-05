import { ACCESS_TOKEN } from "../../constants"
import { TAdminWorkshopSchema } from "../../pages/admin-workshop-page/components/admin-workshop-form/AdminWorkshopFormComponent"

export default async function editWorkshopById(data: TAdminWorkshopSchema, workshopId: number) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/workshop/${workshopId}/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: "Nije moguće urediti radionicu" }

    let jsonData = await response.json()

    return { success: true, message: "Uspješno uređena radionica", data: jsonData }
}