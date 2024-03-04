import DeleteForm from "@/components/admin/DeleteForm"


const EditPage = async ({params}) => {
    const { slug } = params
    const apiUrl = "https://app-nextjs-coder.vercel.app/api"; 
    const item = await fetch(`${apiUrl}/products/product/${slug}`, {
      cache: "no-store",
    }).then((r) => r.json());

   
    console.log(slug)

    return (
        <div>
            <DeleteForm item={item} slug={slug}/>
        </div>
    )
}

export default EditPage