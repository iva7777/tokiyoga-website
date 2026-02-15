"use client";

import { use, useEffect, useState } from "react";
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, Star, Check } from "lucide-react";
import Link from "next/link";
import { Product } from "@/app/types/product";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); 
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) throw new Error("Product not found");
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
  console.log(product);
}, [product]);


    if (loading)
        return (
            <div className="min-h-screen flex items-center justify-center text-accent text-xl">
                Зареждане...
            </div>
        );

    if (!product)
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-accent mb-4">Продуктът не е намерен</h2>
                    <Link href="/accessories" className="text-cyan-400 underline">
                        Обратно към продуктите
                    </Link>
                </div>
            </div>
        );

    const nextImage = () => setSelectedImage((prev) => (prev + 1) % (product.images?.length || 1));
    const prevImage = () =>
        setSelectedImage((prev) => (prev - 1 + (product.images?.length || 1)) % (product.images?.length || 1));

    return (
        <div className="bg-primary min-h-screen">
            <div className="container mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm text-primary-foreground">
                    <Link href="/" className="hover:text-accent transition-colors">
                        Начало
                    </Link>
                    <span>/</span>
                    <Link href="/accessories" className="hover:text-accent transition-colors">
                        Аксесоари
                    </Link>
                    <span>/</span>
                    <span className="text-primary-foreground">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-4">
                        <div className="relative aspect-square bg-card rounded-2xl overflow-hidden group shadow-2xl">
                            <img
                                src={product.images?.[selectedImage] || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <button
                                onClick={prevImage}
                                className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/80 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/80 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary/60 rounded-full text-sm text-primary-foreground border border-accent/30">
                                {selectedImage + 1} / {product.images?.length || 1}
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {product.images?.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${selectedImage === index ? "border-accent shadow-lg shadow-accent/50" : "border-card hover:border-accent/50"
                                        }`}
                                >
                                    <img src={image || "/placeholder.svg"} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold text-primary-foreground mb-2">{product.name}</h1>
                            <p className="text-lg text-primary-foreground">{product.description}</p>
                        </div>

                        <div className="py-6 border-y border-accent/20 flex items-center justify-between">
                            <span className="text-5xl font-bold text-cyan-400">{product.price} лв</span>
                            {product.inStock ? (
                                <div className="flex items-center gap-2 text-cyan-400 font-medium">
                                    <Check className="w-5 h-5" /> В наличност
                                </div>
                            ) : (
                                <span className="text-purple-400 font-medium">Изчерпан</span>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-primary-foreground font-medium">Количество:</span>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 cursor-pointer rounded-full bg-card border-2 border-accent/30 text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 text-3xl"
                                >
                                    -
                                </button>
                                <span className="text-xl font-bold text-primary-foreground min-w-10 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 cursor-pointer rounded-full bg-card border-2 border-accent/30 text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 text-3xl"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4"> 
                            <button className="flex-1 px-8 py-4 bg-accent text-primary rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                                <ShoppingCart className="w-5 h-5" /> Добави в количка
                            </button>
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`w-14 h-14 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 ${isFavorite ? "bg-accent border-accent text-primary" : "bg-card border-accent/30 text-accent hover:border-accent"
                                    }`}
                            >
                                <Heart className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} />
                            </button>
                            <button className="w-14 h-14 rounded-full cursor-pointer bg-card border-2 border-accent/30 text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 flex items-center justify-center">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>

                        {product.fullDescription && (
                            <div className="pt-6 space-y-4">
                                <h2 className="text-2xl font-bold text-accent">Описание</h2>
                                <p className="text-primary-foreground leading-relaxed">{product.fullDescription}</p>
                            </div>
                        )}
                    </div>
                </div>

                {product.features && (
                    <div className="bg-card rounded-2xl p-8 shadow-xl mb-16">
                        <h2 className="text-3xl font-bold text-accent mb-8 text-center">Характеристики</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-accent transition-colors duration-300">
                                        <Check className="w-4 h-4 text-accent group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                    <span className="text-foreground group-hover:text-accent transition-colors duration-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="text-center">
                    <Link
                        href="/accessories"
                        className="inline-block px-8 py-4 bg-primary border-2 border-accent text-accent rounded-full font-bold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/50"
                    >
                        Всички аксесоари
                    </Link>
                </div>
            </div>
        </div>
    );
}
