'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../../context/UserContext';

export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (existingUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(existingUser));
      setUser(existingUser);
      alert('Login successful!');
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-black">
    
      <h2 className="text-xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 w-full rounded hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don’t have an account?{' '}
        <span
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => router.push('/auth/register')}
        >
          Register
        </span>
      </p>
    </div>
  );
}