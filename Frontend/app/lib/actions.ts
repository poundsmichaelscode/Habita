'use server';

import { cookies } from 'next/headers';

/* ================================
   REFRESH TOKEN
================================ */

export async function handleRefresh() {
    console.log('handleRefresh');

    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('session_refresh_token')?.value;

    if (!refreshToken) {
        await resetAuthCookies();
        return null;
    }

    try {
        const response = await fetch('http://localhost:8000/api/auth/token/refresh/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refresh: refreshToken,
            }),
        });

        const json = await response.json();
        console.log('Response - Refresh:', json);

        if (json.access) {
            cookieStore.set('session_access_token', json.access, {
                httpOnly: true,
                secure: false, // change to true in production
                maxAge: 60 * 60,
                path: '/',
            });

            return json.access;
        }

        await resetAuthCookies();
        return null;

    } catch (error) {
        console.log('Refresh error:', error);
        await resetAuthCookies();
        return null;
    }
}

/* ================================
   LOGIN
================================ */

export async function handleLogin(
    userId: string,
    accessToken: string,
    refreshToken: string
) {
    const cookieStore = await cookies();

    cookieStore.set('session_userid', userId, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });

    cookieStore.set('session_access_token', accessToken, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60,
        path: '/',
    });

    cookieStore.set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });
}

/* ================================
   RESET COOKIES
================================ */

export async function resetAuthCookies() {
    const cookieStore = await cookies();

    cookieStore.set('session_userid', '', { path: '/' });
    cookieStore.set('session_access_token', '', { path: '/' });
    cookieStore.set('session_refresh_token', '', { path: '/' });
}

/* ================================
   GETTERS
================================ */

export async function getUserId() {
    const cookieStore = await cookies();
    return cookieStore.get('session_userid')?.value ?? null;
}

export async function getAccessToken() {
    const cookieStore = await cookies();
    let accessToken = cookieStore.get('session_access_token')?.value;

    if (!accessToken) {
        accessToken = await handleRefresh();
    }

    return accessToken ?? null;
}

export async function getRefreshToken() {
    const cookieStore = await cookies();
    return cookieStore.get('session_refresh_token')?.value ?? null;
}
