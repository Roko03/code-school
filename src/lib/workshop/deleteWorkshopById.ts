import { ACCESS_TOKEN } from "../../constants"

export default async function deleteWorkshopById(workshopId: number) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/workshop/${workshopId}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        },
    })

    if (!response.ok) return { success: false, message: "Nije moguće izbrisati radionicu" }

    let jsonData = await response.json()

    return { success: true, message: "Uspješno izbrisana radionica", data: jsonData }
}