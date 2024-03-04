import EditForm from "@/components/admin/EditForm"

const EditPage = async ({params}) => {
    const { slug } = params
   
    const apiUrl = "https://app-nextjs-coder.vercel.app/api"; 
    const item = await fetch(`${apiUrl}/products/product/${slug}`, {
      cache: "no-store",
    }).then((r) => r.json());
   
  
    console.log(slug)

    return (
        <div>
            <EditForm item={item} slug={slug}/>
        </div>
    )
}

export default EditPage