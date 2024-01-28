import { mockData } from "@/data/data"
import Item from "./Item"



export const ItemList = ({ categoria }) => {

	const items = categoria === "todos" ? mockData : mockData.filter(item => item.categoria === categoria)

  return (
	<section className="m-auto min-h-screen p-4 bg-slate-200 flex justify-center items-center gap-10 flex-wrap">
	{
		items.map((item) => {
			return <Item key={item.id} item={item} />
		})
	}
</section>
  )
}
