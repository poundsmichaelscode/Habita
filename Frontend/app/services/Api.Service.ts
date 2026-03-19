const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://127.0.0.1:8000";

const buildUrl = (url: string): string => `${API_HOST}${url}`;

const parseResponse = async (response: Response) => {
    const contentType = response.headers.get("content-type") || "";
    let data: any = null;

    try {
        if (contentType.includes("application/json")) {
            data = await response.json();
        } else {
            data = await response.text();
        }
    } catch {
        data = null;
    }

    if (!response.ok) {
        console.error("API ERROR:", {
            status: response.status,
            statusText: response.statusText,
            data,
        });
        return data ?? {};
    }

    return data;
};

const apiService = {
    get: async function (url: string): Promise<any> {
        const response = await fetch(buildUrl(url), {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            cache: "no-store",
        });

        return await parseResponse(response);
    },

    post: async function (url: string, data: any, token?: string): Promise<any> {
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