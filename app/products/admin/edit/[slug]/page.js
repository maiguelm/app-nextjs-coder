import EditForm from "@/components/admin/EditForm"

const EditPage = async ({params}) => {
    const { slug } = params
   const item = await fetch(`${process.env.VERCEL_URL}/products/product/${slug}`, {
        cache: 'no-store'
    }).then(res => res.json())

    console.log(slug)

    return (
        <div>
            <EditForm item={item} slug={slug}/>
        </div>
    )
}

export default EditPage