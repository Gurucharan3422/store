'use client';

import RegisterForm from "../RegisterForm";
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Guru Store</h1>
      <RegisterForm />
      
    </div>
  );
}