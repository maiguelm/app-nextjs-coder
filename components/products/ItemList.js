import Item from "./Item";

export const ItemList = async ({ categoria }) => {

  const items = await fetch(`${process.env.VERCEL_URL}/products/${categoria}`, {
    cache: "no-store",
  }).then((r) => r.json());

  return (
    <section className="m-auto min-h-screen p-4 bg-slate-200 flex justify-center items-center gap-10 flex-wrap">
      {items.map((item) => {
        return <Item key={item.slug} item={item} />;
      })}
    </section>
  );
};
