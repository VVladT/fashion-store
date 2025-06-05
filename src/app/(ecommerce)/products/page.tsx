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
    const resolvedSearchParams = await searchParams;

    const query = {
        title: resolvedSearchParams.title,
        price_min: resolvedSearchParams.price_min ? Number(resolvedSearchParams.price_min) : undefined,
        price_max: resolvedSearchParams.price_max ? Number(resolvedSearchParams.price_max) : undefined,
        categorySlug: resolvedSearchParams.category
    };

    const products = await getProducts(query);
    const categories = await getCategories();

    return (
        <div>
            <ProductFilter categories={categories.data!} currentFilters={resolvedSearchParams}/>
            <div className="h-[2rem]"></div>
            <ProductList products={products.data!}/>
        </div>
    )
}