import { Header } from "@/components/ui/Header";
import "./globals.css";
import Footer from "@/components/ui/Footer";
// import { ContextCartProvider } from "@/components/context/cartContext";
import { ContextAuthProvider } from "@/components/context/AuthContext";


export const metadata = {
  title: "Lemonies Pasteleria Artesanal",
  description: "Pasteleria Artesanal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ContextAuthProvider>
          {/* <ContextCartProvider> */}
            <Header />
            <main className="m-auto min-h-screen p-4 bg-slate-200 flex flex-col">
              {children}
            </main>
            <Footer />
          {/* </ContextCartProvider> */}
        </ContextAuthProvider>
      </body>
    </html>
  );
}
