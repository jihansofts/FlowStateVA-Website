import Footer from "@/components/Footer";
import HeaderServiceNav from "@/components/HeaderServiceNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderServiceNav />
      {children}
      <Footer />
    </section>
  );
}
