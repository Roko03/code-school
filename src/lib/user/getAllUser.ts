export default async function getAllUser() {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/user/`)

    if (!response.ok) return { success: false }

    return await response.json()
}