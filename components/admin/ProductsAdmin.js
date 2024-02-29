import Image from "next/image";
import Link from "next/link";


const ProductsAdmin = async () => {
    const data = await fetch(`${process.env.VERCEL_URL}/products/todos`, {
        cache: "no-store",
    }).then(r => r.json());


    return (
        <>
            <Link href="/admin/create" className="rounded bg-blue-600 p-2 text-white">
                Crear nuevo
            </Link>
            <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" className="px-3 py-2">
                                Nombre
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Precio
                            </th>
                            <th scope="col" className="px-3 py-2">
                                En stock
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Tipo
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Imagen
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Slug
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Descripción
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.slug}>
                                <td className="p-2">{item.nombre}</td>
                                <td className="p-2">{item.precio}</td>
                                <td className="p-2">{item.cantidad}</td>
                                <td className="p-2">{item.categoria}</td>
                                <td className="p-2">
                                    <Image
                                        src={item.imagen}
                                        alt={item.nombre}
                                        width={80}
                                        height={80}
                                    />
                                </td>
                                <td className="p-2">{item.slug}</td>
                                <td className="p-2 truncate max-w-prose">{item.descripcion}</td>
                                <td className="p-2">
                                    <Link
                                        href={`/admin/edit/${item.slug}`}
                                        className="rounded bg-green-400 p-2 text-white"
                                    >
                                        Editar
                                    </Link>
                                    <Link
                                        href={`/admin/delete/${item.slug}`}
                                        className="rounded bg-red-400 p-2 text-white"
                                    >
                                        Eliminar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductsAdmin;
 