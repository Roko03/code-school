import { ACCESS_TOKEN } from "../../constants"

export default async function getStudentWorkshop() {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/student/workshop/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(localStorage.getItem(ACCESS_TOKEN))
        }
    })

    if (!response.ok) return { success: false }

    const jsonData = await response.json()

    return { success: true, data: jsonData }
}