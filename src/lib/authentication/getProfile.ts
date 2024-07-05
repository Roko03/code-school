export default async function getProfile(token: string) {

    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/profile/`, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + String(token)
        }
    })

    if (!response.ok) return { success: false }

    let data = await response.json()
    return { success: true, user: data }
}