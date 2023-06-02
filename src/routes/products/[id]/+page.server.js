import { readFile } from "fs/promises";
import { addToCart, loadCart } from '$lib/server/cart';
import { loadProducts } from '$lib/server/product';

// async function loadProducts() {
//     const content = await readFile('data/products.json', { encoding: 'utf-8' });
//     return JSON.parse(content);
// }

async function getProductFromDatabase(productId) {
    const products = await loadProducts();
    return products.find((product) => productId === product.id);
}

async function getRelatedProductsFromDatabase(productId) {
    const products = await loadProducts();
    return products.filter((product) => productId !== product.id)
}

export async function load({ params }) {
    const products = await loadProducts();
    const product = products.find((product) => product.id === params.id);
    const relatedProducts = products.filter((product) => product.id !== params.id);
    const cart = await loadCart();

    return { product, relatedProducts, cart };
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        await addToCart(data.get('productId'));
    }
}