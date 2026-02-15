import { Product } from "@/app/types/product";
import { NextResponse } from "next/server";

const products: Product[] = [
    {
        id: "1",
        name: "Премиум йога постелка",
        price: 89.99,
        images: ["images/products/purple-yoga-mat-rolled-up.jpg"],
        description: "Висококачествена постелка с отлично сцепление",
        category: "mats"
    },
    {
        id: "2",
        name: "Корк йога блок",
        price: 29.99,
        images: ["images/products/cork-yoga-block-natural.jpg"],
        description: "Екологичен блок от естествен корк",
        category: "blocks"
    },
    {
        id: "3",
        name: "Памучен йога колан",
        price: 19.99,
        images: ["images/products/cotton-yoga-strap-purple.jpg"],
        description: "Регулируем колан за разтягане",
        category: "straps"
    },
    {
        id: "4",
        name: "Йога блуза",
        price: 49.99,
        images: ["images/products/yoga-top-athletic-wear-purple.jpg"],
        description: "Удобна и дишаща спортна блуза",
        category: "clothing"
    },
    {
        id: "5",
        name: "Медитационна възглавница",
        price: 69.99,
        images: ["images/products/meditation-cushion-purple-round.jpg"],
        description: "Удобна възглавница за медитация",
        category: "all"
    },
    {
        id: "6",
        name: "Йога чанта",
        price: 39.99,
        images: ["images/products/yoga-mat-bag-purple-canvas.jpg"],
        description: "Практична чанта за постелка и аксесоари",
        category: "all"
    },
    {
        id: "7",
        name: "Йога одеяло",
        price: 54.99,
        images: ["images/products/yoga-blanket-folded-purple.jpg"],
        description: "Мека и топла кърпа за релаксация",
        category: "mats"
    },
    {
        id: "8",
        name: "Памучен йога блок",
        price: 19.99,
        images: ["/images/products/yoga-block-cotton.webp"],
        description: "Полезна подкрепа за много йога пози и упражнения!",
        category: "blocks"
    },
];

export async function GET() {
    return NextResponse.json(products);
}