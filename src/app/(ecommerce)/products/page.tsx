import ProductList from "@/modules/products/components/page/ProductList";
import { getProducts } from "@/modules/products/actions/get-products"
import ProductFilter from "@/modules/products/components/page/ProductFilter";
import { getCategories } from "@/modules/products/categories/actions/get-categories";

type Props = {
    searchParams: {
        title?: string;
        price_min?: string;
        price_max?: string;
        category?: string;
    }
}

export default async function ProductsPage({ searchParams } : Props) {
    const query = {
        title: searchParams.title,
        price_min: searchParams.price_min ? Number(searchParams.price_min) : undefined,
        price_max: searchParams.price_max ? Number(searchParams.price_max) : undefined,
        categorySlug: searchParams.category
    };

    const products = await getProducts(query);
    const categories = await getCategories();

    return (
        <div>
            <ProductFilter categories={categories.data!} currentFilters={searchParams}/>
            <div className="h-[2rem]"></div>
            <ProductList products={products.data!}/>
        </div>
    )
}