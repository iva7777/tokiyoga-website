import ContactForm from "@/components/contact/contact-form";
import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Header/>
            <main>
                <ContactHero/>
                <ContactInfo/>
                <ContactForm/>
                <ContactMap/>
            </main>
            <Footer/>
        </div>
    )
}