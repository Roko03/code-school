export default async function filterUser(type: "adm" | "stu" | "prof") {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/user/role/${type}`)

    if (!response.ok) return { success: false }

    return await response.json()
}