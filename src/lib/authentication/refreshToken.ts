export default async function refreshToken(token: string) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/token/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh: token
        })
    })

    if (!response.ok) return { success: false }

    let json = await response.json()
    return { success: true, tokenAccess: json.access }
}