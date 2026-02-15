"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Product } from "@/app/types/product";

type Props = {
    products: Product[];
    activeCategory: string;
};

export default function AccessoriesGrid({ products, activeCategory }: Props) {
    const [visibleCount, setVisibleCount] = useState(8);

    const filteredProducts =
        activeCategory === "all"
            ? products
            : products.filter((p) => p.category === activeCategory);

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    return (
        <section className="bg-background py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {visibleProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/accessories/${product.id}`}
                            className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:cursor-pointer transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative overflow-hidden aspect-square bg-muted">
                                <img
                                    src={product.images[0] || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-accent">
                                        {product.price} лв.
                                    </span>

                                    <button className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-cyan-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:cursor-pointer">
                                        <ShoppingCart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {visibleCount < filteredProducts.length && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setVisibleCount(visibleCount + 8)}
                            className="px-8 py-4 bg-primary border-2 border-accent text-accent rounded-full font-bold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:cursor-pointer"
                        >
                            Виж още продукти
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
