import Image from "next/image";


export default function Home() {
  return (
    <section className="container m-auto p-40 flex flex-col gap-5 items-center">
      <h1 className="text-6xl font-bold font-mono">LEMONIES</h1>
      <Image
        alt="Wallpaper de Lemonies"
        src={"/wallpaper.jpg"}
        height={1000}
        width={1000}
        style={{ objectFit: "cover" }}
      />
      {/* <img src={Wallpaper} alt="fotografía de facturas" /> */}
      <h3 className="text-2xl">Pasteleria artesanal del calidad </h3>
    </section>
  );
}
