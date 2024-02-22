import Card from "@/components/products/Card";

const ProductDetail = ({ params }) =>{

  const { slug } = params

  return(
    <section className="container m-auto p-8 bg-slate-300 min-h-screen">
      <Card slug={ slug } />
    </section>
  )

}

export default ProductDetail;