"use client";

type Props = {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
};

const categories = [
    { id: "all", name: "Всички" },
    { id: "mats", name: "Постелки" },
    { id: "blocks", name: "Блокове" },
    { id: "straps", name: "Колани" },
    { id: "clothing", name: "Облекло" },
];
//FIXME: fix the SWR error

export default function AccessoriesCategories({
    activeCategory,
    setActiveCategory
}: Props) {
    return (
        <section className="bg-background py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:cursor-pointer ${
                                activeCategory === category.id
                                    ? "bg-accent text-primary scale-105 shadow-lg shadow-accent/30"
                                    : "bg-card text-foreground hover:bg-accent/20 hover:scale-105"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
