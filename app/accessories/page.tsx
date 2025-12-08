"use client";

import AccessoriesCategories from "@/components/accessories/accessories-categories";
import AccessoriesGrid from "@/components/accessories/accessories-grid";
import AccessoriesHero from "@/components/accessories/accessories-hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Suspense, useEffect, useState } from "react";

export default function AccessoriesPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        const loadProducts = async () => {
            const res = await fetch("/api/products");
            const data = await res.json();
            setProducts(data);
        };

        loadProducts();
    }, []);


    return (
        <div className="min-h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <main>
                <AccessoriesHero/>
                <AccessoriesCategories 
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <AccessoriesGrid 
                    products={products} 
                    activeCategory={activeCategory}
                />
            </main>
            <Footer />
        </div>
    )
}