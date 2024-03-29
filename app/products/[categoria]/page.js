import CategoryMenu from "@/components/products/CategoryMenu";
import { ItemList } from "@/components/products/ItemList";
import generateStaticParams from "@/components/products/StaticParams";


export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Lemonies Pasteleria Artesanal: ${params.categoria}`,
  };
}

const Products = ({ params }) => {
  const { categoria } = params;
  const staticParams = generateStaticParams()

  return (
    <section className="container m-auto">
      <h2 className="text-3xl p-4 border-b-4">Nuestras Delicias!!!!</h2>

      <div className="flex gap-8">
        <ItemList categoria={categoria} staticParams={staticParams}/>
        <CategoryMenu />
      </div>
    </section>
  );
};

export default Products;
