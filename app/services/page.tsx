import Footer from "@/components/footer";
import Header from "@/components/header";
import ServicesCTA from "@/components/services/services-cta";
import ServicesGrid from "@/components/services/services-grid";
import ServicesHero from "@/components/services/services-hero";

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <Header/>
            <main>
                <ServicesHero/>
                <ServicesGrid/>
                <ServicesCTA/>
            </main>
            <Footer/>
        </div>
    )
}