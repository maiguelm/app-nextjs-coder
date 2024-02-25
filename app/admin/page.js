import ProductsAdmin from "@/components/admin/ProductsAdmin";
import LogoutButton from "@/components/auth/Logout";

const Admin = () => {

  return(
    <div>
      <h1 className="text-3xl text-center font-bold mb-4">Administracion de pagina</h1>
      <ProductsAdmin />
      <LogoutButton />
    </div>
  )

};

export default Admin;
