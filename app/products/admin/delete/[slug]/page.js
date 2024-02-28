import DeleteForm from "@/components/admin/DeleteForm"


const EditPage = async ({params}) => {
    const { slug } = params
   const item = await fetch(`http://${process.env.VERCEL_URL}/api/products/product/${slug}`, {
        cache: 'no-store'
    }).then(res => res.json())

    console.log(slug)

    return (
        <div>
            <DeleteForm item={item} slug={slug}/>
        </div>
    )
}

export default EditPage