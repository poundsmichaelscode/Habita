import { getAccessToken } from "../lib/actions";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:8000";

const buildUrl = (url: string): string => `${API_HOST}${url}`;

const parseResponse = async (response: Response) => {
    const contentType = response.headers.get("content-type");
    let data: any = null;

    if (contentType && contentType.includes("application/json")) {
        data = await response.json();
    } else {
        data = await response.text();
    }

    if (!response.ok) {
        console.error("API ERROR:", data);
        return data;
    }

    return data;
};

const apiService = {
    get: async function (url: string): Promise<any> {
        const token = await getAccessToken();

        const response = await fetch(buildUrl(url), {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            cache: "no-store",
        });

        return await parseResponse(response);
    },

    post: async function (url: string, data: any): Promise<any> {
        const token = await getAccessToken();
        const isFormData = data instanceof FormData;

        const response = await fetch(buildUrl(url), {
            method: "POST",
            body: isFormData ? data : JSON.stringify(data),
            headers: {
                Accept: "application/json",
                ...(isFormData ? {} : { "Content-Type": "application/json" }),
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        });

        return await parseResponse(response);
    },

    postWithoutToken: async function (url: string, data: any): Promise<any> {
        const isFormData = data instanceof FormData;

        const response = await fetch(buildUrl(url), {
            method: "POST",
            body: isFormData ? data : JSON.stringify(data),
            headers: {
                Accept: "application/json",
                ...(isFormData ? {} : { "Content-Type": "application/json" }),
            },
        });

        return await parseResponse(response);
    },
};

export default apiService;