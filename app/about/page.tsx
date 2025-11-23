import AboutHero from "@/components/about/about-hero";
import AboutStory from "@/components/about/about-story";
import AboutTeam from "@/components/about/about-team";
import AboutValues from "@/components/about/about-values";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <AboutHero />
                <AboutStory />
                <AboutValues />
                <AboutTeam />
            </main>
            <Footer />
        </div>
    )
}