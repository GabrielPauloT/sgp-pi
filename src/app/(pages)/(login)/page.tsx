"use client";
import { Icons } from '@/components/Icons';
import { useRouter } from "next/navigation";
import { useState } from 'react';
import Cookie from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  function handleLogin() {
    Cookie.set("auth", "testekjsandlkansdlkasdm");
    router.push("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 font-semibold flex no-wrap gap-2">
              <Icons name='MdMailOutline' />
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full py-2 px-3 border rounded shadow"
              placeholder="Seu email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="text-gray-600 font-semibold flex no-wrap gap-2">
            <Icons name='BsKey' />
              Senha:
            </label>
            <input
              type="password"
              id="password"
              className="w-full py-2 px-3 border rounded shadow"
              placeholder="Sua senha"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-primary-100 transition duration-300 flex w-full justify-center items-center mt-2"
            >
              Entrar
            </button>
        </form>
      </div>
    </div>
  );
};
