import ProductSlider from "@/components/ProductSlider";

export default function Home() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Produk Unggulan</h1>
            <ProductSlider />
        </main>
    );
}
