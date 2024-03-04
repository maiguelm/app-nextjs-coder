import ProductsAdmin from "@/components/admin/ProductsAdmin";
import LogoutButton from "@/components/auth/Logout";
import Link from "next/link";

const Admin = () => {

  return(
    <div>
      <h1 className="text-3xl text-center font-bold mb-4">Administracion de productos</h1>
     <Link href={'/products/admin/products'}> Ver productos</Link>
      
    </div>
  )

};

export default Admin;
