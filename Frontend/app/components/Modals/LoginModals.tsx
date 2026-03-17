'use client';

import Modal from "./Modals";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/Hooks/UseLoginModal";
import CustomButton from "../forms/CustomButton";
import { handleLogin } from "@/app/lib/actions";
import apiService from "@/app/services/Api.Service";

const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setErrors([]);

        try {
            const response = await apiService.postWithoutToken("/api/auth/login/", {
                email,
                password,
            });

            console.log("LOGIN RESPONSE:", response);

            if (response?.access && response?.refresh && response?.user?.pk) {
                await handleLogin(
                    String(response.user.pk),
                    response.access,
                    response.refresh
                );

                loginModal.close();
                router.push("/");
                router.refresh();
                return;
            }

            const tmpErrors: string[] = [];

            Object.values(response || {}).forEach((error: any) => {
                if (Array.isArray(error)) {
                    tmpErrors.push(...error.map(String));
                } else if (typeof error === "string") {
                    tmpErrors.push(error);
                }
            });

            setErrors(tmpErrors.length ? tmpErrors : ["Login failed"]);
        } catch (error: any) {
            console.error("Login error:", error);
            setErrors([error?.message || "Unable to log in"]);
        } finally {
            setLoading(false);
        }
    };

    const content = (
        <form onSubmit={submitLogin} className="space-y-4">
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your e-mail address"
                type="email"
                className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                required
            />

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                type="password"
                className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                required
            />

            {errors.map((error, index) => (
                <div
                    key={`error_${index}`}
                    className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                >
                    {error}
                </div>
            ))}

            <CustomButton
                label={loading ? "Submitting..." : "Submit"}
                onClick={() => {}}
                type="submit"
                disabled={loading}
            />
        </form>
    );

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    );
};

export default LoginModal;