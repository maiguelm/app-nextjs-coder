import QtrSelector from "@/app/components/products/QtrSelector";
import { Button } from "@/app/components/ui/Button";
import { mockData } from "@/data/data";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ProductDetail = async ({ slug }) => {

  const item = await fetch(`http://localhost:3000/api/product/detail/${slug}`, {
    cache: "no-store",
  })
  

  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <section className="container m-auto p-8 bg-slate-300 min-h-screen">
      <div className="max-w-md m-auto border-black border-solid border-2 rounded flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold pt-4">{item.nombre}</h1>
        <h2 className="text-lg font-medium font">$ {item.precio}</h2>
        <p className="text-center text-base">{item.descripcion}</p>
        <Image
          alt={item.nombre}
          src={item.imagen}
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
        <QtrSelector className="pb-4 gap-3" item={item} />
      </div>
    </section>
  );
};

export default ProductDetail;
