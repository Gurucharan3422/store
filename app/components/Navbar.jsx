'use client';
import { useRouter } from 'next/navigation';
import { useUser } from '../../context/UserContext';

export default function Navbar() {
  const router = useRouter();
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null); // update context
    router.push('/auth/login');
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => router.push('/')}
      >
        Guru Store
      </h1>
      <div className="flex gap-4">
        {user && (
          <>
            <button onClick={() => router.push('/products')}>Products</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}