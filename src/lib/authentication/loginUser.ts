import { TAuthenticationSchema } from "../../pages/authentication-page/components/authentication-form/AuthenticationFormComponent";

export default async function loginUser(data: TAuthenticationSchema) {

    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/api/token/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false }

    let json = await response.json()
    return { success: true, tokenAccess: json.access, tokenRefresh: json.refresh }
}