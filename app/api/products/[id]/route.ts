import { Product } from "@/app/types/product"
import { NextResponse } from "next/server"

const products: Product[] = [
    {
        id: "1",
        name: "Премиум йога постелка",
        price: 89.99,
        images: [
            "/images/products/purple-yoga-mat-rolled-up.jpg",
            "/images/products/purple-yoga-mat-unrolled-on-floor.webp",
            "/images/products/yoga-mat-close-up-texture.jpg",
        ],
        description: "Висококачествена постелка с отлично сцепление",
        fullDescription:
            "Нашата премиум йога постелка е създадена от висококачествени екологични материали...",
        features: [
            "Дебелина 6мм",
            "Нехлъзгаща се повърхност",
            "Екологичен TPE материал",
        ],
        rating: 4.8,
        reviews: 127,
        inStock: true,
    },
    {
        id: "2",
        name: "Корк йога блок",
        price: 29.99,
        images: [
            "/images/products/cork-yoga-block-natural.jpg",
            "/images/products/cork-yoga-block-texture-close-up.jpg"
        ],
        description: "Екологичен блок от естествен корк",
        fullDescription:
            "Нашият корк йога блок е произведен от 100% натурален корк, предлагащ отлична стабилност и поддръжка за вашата практика. Екологичен и издръжлив.",
        features: [
            "100% натурален португалски корк",
            "Размер 23см x 15см x 7.5см",
            "Лек и портативен",
            "Нехлъзгаща се повърхност",
            "Антибактериален и хипоалергенен",
            "Идеален за всички нива",
        ],
        rating: 4.9,
        reviews: 89,
        inStock: true,
    },
    {
        id: "3",
        name: "Памучен йога колан",
        price: 19.99,
        images: [
            "/images/products/cotton-yoga-strap-purple.jpg",
            "/images/products/yoga-strap-in-use-for-stretching.webp",
            "/images/products/purple-yoga-strap-with-buckle.jpg"
        ],
        description: "Регулируем колан за разтягане",
        fullDescription:
            "Памучният йога колан е вашият перфектен помощник за подобряване на гъвкавостта и задълбочаване на разтяганията. Изработен от 100% памук за максимален комфорт.",
        features: [
            "100% памучна изработка",
            "Дължина 244см, ширина 3.8см",
            "Метална D-образна катарама",
            "12 вградени бримки за регулация",
            "Издръжлив и дълготраен",
            "Подходящ за всички видове йога",
        ],
        rating: 4.7,
        reviews: 64,
        inStock: true,
    },
    {
        id: "4",
        name: "Йога блуза",
        price: 49.99,
        images: [
            "/images/products/yoga-top-athletic-wear-purple.jpg",
            "/images/products/woman-wearing-purple-yoga-top.webp",
            "/images/products/yoga-top-fabric-close-up.jpg"
        ],
        description: "Удобна и дишаща спортна блуза",
        fullDescription:
            "Елегантна и функционална йога блуза, създадена от дишащи материали, които ви поддържат сухи и удобни през цялата тренировка. Модерен дизайн с отлична подвижност.",
        features: [
            "Дишащ и бързосъхнещ материал",
            "4-посочна еластичност",
            "Защита от UV лъчи",
            "Анатомичен крой",
            "Размери от XS до XL",
            "Машинно пране",
        ],
        rating: 4.6,
        reviews: 143,
        inStock: true,
    },
    {
        id: "5",
        name: "Медитационна възглавница",
        price: 69.99,
        images: [
            "/images/products/meditation-cushion-purple-round.jpg",
        ],
        description: "Удобна възглавница за медитация",
        fullDescription:
            "Ергономична медитационна възглавница, пълнена с био елда, която осигурява перфектна подкрепа за продължителни медитации. Красив дизайн в наш фирмен цвят.",
        features: [
            "Пълнеж от био елда",
            "Диаметър 33см, височина 15см",
            "Сваляема калъфка за пране",
            "Ергономична форма",
            "Ръчно изработена",
            "Подходяща за всички медитационни пози",
        ],
        rating: 4.9,
        reviews: 78,
        inStock: true,
    },
    {
        id: "6",
        name: "Йога чанта",
        price: 39.99,
        images: [
            "/images/products/yoga-mat-bag-purple-canvas.jpg",
            "/images/products/yoga-mat-bag-with-mat-inside.webp",
            "/images/products/yoga-bag-zipper-and-pockets.jpg"
        ],
        description: "Практична чанта за постелка и аксесоари",
        fullDescription:
            "Стилна и функционална чанта за вашата йога постелка и аксесоари. Изработена от издръжлив платнен материал с водоустойчива вътрешна подплата.",
        features: [
            "100% памучен платнен материал",
            "Регулируема презрамка",
            "Два външни джоба",
            "Водоустойчива подплата",
            "Голям основен отсек",
            "Компактна и лека",
        ],
        rating: 4.5,
        reviews: 91,
        inStock: true,
    },
    {
        id: "7",
        name: "Йога одеяло",
        price: 54.99,
        images: [
            "/images/products/yoga-blanket-folded-purple.jpg",
            "/images/products/purple-yoga-blanket-unfolded.jpg",],
        description: "Мека и топла кърпа за релаксация",
        fullDescription:
            "Многофункционално йога одеяло, перфектно за релаксация, медитация или като допълнителна подплата. Мек и топъл материал, който ви осигурява максимален комфорт.",
        features: [
            "Памучно-акрилна смес",
            "Размер 150см x 200см",
            "Мека и дишаща тъкан",
            "Многофункционална употреба",
            "Машинно пране",
            "Различни цветови варианти",
        ],
        rating: 4.7,
        reviews: 52,
        inStock: true,
    },
    {
        id: "8",
        name: "Болстер за йога",
        price: 79.99,
        images: [
            "/images/products/yoga-bolster-pillow-purple.jpg",
        ],
        description: "Поддържащ болстер за възстановителна йога",
        fullDescription:
            "Професионален йога болстер, създаден за дълбока релаксация и възстановителна практика. Плътен и стабилен, осигуряващ отлична подкрепа за тялото.",
        features: [
            "Правоъгълна форма 66см x 23см x 15см",
            "Пълнеж от рециклиран памук",
            "Сваляема памучна калъфка",
            "Здрави дръжки за пренос",
            "Подходящ за инверсии и разтягания",
            "Професионално качество",
        ],
        rating: 4.8,
        reviews: 67,
        inStock: true,
    },
]

export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const product = products.find(p => p.id === id);
    if (!product) {
        return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }
    return NextResponse.json(product);
}

