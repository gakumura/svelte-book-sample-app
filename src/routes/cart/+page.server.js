import { readFile } from "fs/promises";
import { loadCart, clearCart } from '$lib/server/cart';

async function loadProducts() {
    const content = await readFile('data/products.json', { encoding: 'utf-8' });
    return JSON.parse(content);
}

export async function load({ params }) {
    const cart = await loadCart();

    return { cart };
}

export const actions = {
    default: async ({ request }) => {
        await clearCart();
    }
}