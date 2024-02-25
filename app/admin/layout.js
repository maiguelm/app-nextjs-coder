'use client'
import { Button } from "@/components/ui/Button";
import { useAuthContextProvider } from "@/hooks/hooks";
import { useRouter } from 'next/navigation';

const AdminLayout = ({ children, login }) => {
    const { user, logout } = useAuthContextProvider();
    const router = useRouter()

    if(!user.logged){
        return(
            <>
            <h1 className="text-2xl text-center font-bold">Administrador</h1>
            {login}
            </>
            
        )
    }

    if(!user.admin){
        return (
            <div>
                <h1 className="text-2xl text-center font-bold">Acceso no permitido</h1>
                <Button onClick={() =>{ router.push('/admin'); logout()}}>Volver</Button>
                
            </div>
        );
    }

    return <>{children}</>

};

export default AdminLayout;
