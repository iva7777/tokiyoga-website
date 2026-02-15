export type Product = {
    id: string;
    name: string;
    price: number;
    images: string[];
    description: string;
    fullDescription?: string;
    features?: string[];
    category?: string;
    rating?: number;
    reviews?: number;
    inStock?: boolean;
};