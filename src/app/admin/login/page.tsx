"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "@/components/ui/custom/Button";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
      callbackUrl: "/admin/dashboard",
    });

    if (res?.error) {
      setError(res.error);
    } else {
      window.location.href = "/admin/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h1 className="text-xl font-bold text-center mb-4">Admin Login</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <Button
            type="submit"
            variant="solid"
            className="w-full cursor-pointer font-semibold py-2"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
