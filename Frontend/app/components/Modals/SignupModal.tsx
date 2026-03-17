'use client';

import Modal from "./Modals";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignupModal from "@/app/Hooks/UseSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/Api.Service";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {
    const router = useRouter();
    const signupModal = useSignupModal();

    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const submitSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;

        setErrors([]);
        setLoading(true);

        try {
            const response = await apiService.postWithoutToken("/api/auth/register/", {
                email,
                password1,
                password2,
            });

            console.log("SIGNUP RESPONSE:", response);

            if (response?.access && response?.refresh && response?.user?.pk) {
                await handleLogin(
                    String(response.user.pk),
                    response.access,
                    response.refresh
                );

                signupModal.close();
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

            setErrors(tmpErrors.length ? tmpErrors : ["Signup failed"]);
        } catch (error: any) {
            console.error("Signup error:", error);
            setErrors([error?.message || "Unable to sign up"]);
        } finally {
            setLoading(false);
        }
    };

    const content = (
        <form onSubmit={submitSignup} className="space-y-4">
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your e-mail address"
                type="email"
                className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                required
            />

            <input
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="Your password"
                type="password"
                className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                required
            />

            <input
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Repeat password"
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
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    );
};

export default SignupModal;