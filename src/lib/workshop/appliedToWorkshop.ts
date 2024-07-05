import { ACCESS_TOKEN } from "../../constants"

export default async function appliedToWorkshop(workshop_id: number, user_id: number) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/workshop/${workshop_id}/user/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        },
        body: JSON.stringify({ user_id: user_id })
    })

    if (!response.ok) return { success: false, message: "Nije moguća prijava" }

    const jsonData = await response.json()
    return { success: true, message: "Uspješno ste se prijavili", data: jsonData }
}