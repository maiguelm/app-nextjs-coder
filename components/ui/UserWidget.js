import { useContext, useState } from 'react';
import Link from 'next/link';
import { User } from 'react-feather';

import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { AuthContext } from '../context/AuthContext';

const UserWidget = () => {
    const { user } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    console.log(user)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        await signOut(auth);
        setMenuOpen(false); 
    };

    return (
        <>
            {user.logged ? (
                <div className="relative">
                    <button onClick={handleToggleMenu} className="flex items-center gap-1">
                        <p>Hola {user.firstName || user.displayName}</p>
                    </button>
                    {menuOpen && (
                        <ul className="absolute right-0 mt-2 w-36 bg-white rounded shadow-lg">
                            <li>
                                <Link href="/auth/edit" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Editar usuario
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                                    Cerrar sesión
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            ) : (
                <Link className="flex flex-col items-center gap-1" href="/auth">
                    <User color="white" size={20} />
                </Link>
            )}
        </>
    );
};

export default UserWidget;
