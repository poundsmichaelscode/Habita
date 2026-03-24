const API_HOST =
  process.env.NEXT_PUBLIC_API_HOST || "http://127.0.0.1:8000";

const buildUrl = (url: string): string => `${API_HOST}${url}`;

// Handle API response safely
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

// Get token safely (only in browser)
const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

const apiService = {
  // ✅ GET request
  get: async (url: string): Promise<any> => {
    const response = await fetch(buildUrl(url), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    return parseResponse(response);
  },

  // ✅ POST without token
  postWithoutToken: async (url: string, data: any): Promise<any> => {
    const isFormData = data instanceof FormData;

    const response = await fetch(buildUrl(url), {
      method: "POST",
      body: isFormData ? data : JSON.stringify(data),
      headers: {
        Accept: "application/json",
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
      },
    });

    return parseResponse(response);
  },

  // ✅ POST with token (FIXED)
  post: async (url: string, data: any): Promise<any> => {
    const token = getToken();
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

    return parseResponse(response);
  },
};

export default apiService;