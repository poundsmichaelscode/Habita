'use server';

import { cookies } from 'next/headers';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://127.0.0.1:8000';

type RefreshResponse = {
    access?: string;
    refresh?: string;
    [key: string]: any;
};

export async function handleRefresh(): Promise<string | null> {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('session_refresh_token')?.value;

    if (!refreshToken) {
        await resetAuthCookies();
        return null;
    }

    try {
        const response = await fetch(`${API_HOST}/api/auth/token/refresh/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: refreshToken }),
            cache: 'no-store',
        });

        const json: RefreshResponse = await response.json();

        if (response.ok && json.access) {
            cookieStore.set('session_access_token', json.access, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60,
                path: '/',
            });

            return json.access;
        }

        await resetAuthCookies();
        return null;
    } catch {
        await resetAuthCookies();
        return null;
    }
}

export async function handleLogin(
    userId: string | null,
    accessToken: string,
    refreshToken: string
): Promise<void> {
    const cookieStore = await cookies();

    if (userId) {
        cookieStore.set('session_userid', userId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });
    } else {
        cookieStore.delete('session_userid');
    }

    cookieStore.set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60,
        path: '/',
    });

    cookieStore.set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });
}

export async function resetAuthCookies(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete('session_userid');
    cookieStore.delete('session_access_token');
    cookieStore.delete('session_refresh_token');
}

export async function getUserId(): Promise<string | null> {
    const cookieStore = await cookies();
    return cookieStore.get('session_userid')?.value ?? null;
}

export async function getAccessToken(): Promise<string | null> {
    const cookieStore = await cookies();
    let accessToken = cookieStore.get('session_access_token')?.value ?? null;

    if (!accessToken) {
        accessToken = await handleRefresh();
    }

    return accessToken;
}

export async function getRefreshToken(): Promise<string | null> {
    const cookieStore = await cookies();
    return cookieStore.get('session_refresh_token')?.value ?? null;
}