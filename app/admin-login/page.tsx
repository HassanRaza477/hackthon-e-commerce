"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLogin() {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (session?.user?.role === "admin") {
      router.push("/admin/orders");
    }
  }, [session, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { email, password, redirect: false });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
