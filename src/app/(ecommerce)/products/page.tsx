import ProductList from "@/modules/products/components/page/ProductList";
import { getProducts } from "@/modules/products/actions/get-products"
import ProductFilter from "@/modules/products/components/page/ProductFilter";
import { getCategories } from "@/modules/products/categories/actions/get-categories";

type Props = {
    searchParams: Promise<{
        title?: string;
        price_min?: string;
        price_max?: string;
        category?: string;
    }>
}

export default async function ProductsPage({ searchParams } : Props) {

    const { title, price_min, price_max, category } = await searchParams;
    const currentFilters = {title, price_min, price_max, category}

    const query = {
        title: title,
        price_min: price_min ? Number(price_min) : undefined,
        price_max: price_max ? Number(price_max) : undefined,
        categorySlug: category
    };

    const products = await getProducts(query);
    const categories = await getCategories();

    return (
        <div>
            <ProductFilter categories={categories.data!} currentFilters={currentFilters}/>
            <div className="h-[2rem]"></div>
            <ProductList products={products.data!}/>
        </div>
    )
}