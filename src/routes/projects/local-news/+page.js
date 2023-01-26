// export async function load({ fetch }) {
//     const res = await fetch('http://127.0.0.1:8000/local-news/');
//     const item = await res.json();

//     return { item };
// }



// export const load = async ({ fetch }) => {
//     const newsRes = await fetch('http://127.0.0.1:8000/local-news/')
//     const newsData = await newsRes.json()
//     const news = newsData.title

//     return {
//         product: 'iPhone 14'
//     }
// }


export const load = async ({ fetch }) => {
    const fetchProducts = async () => {
        const productRes = await fetch('https://dummyjson.com/products?limit=10')
        const productData = await productRes.json()
        return productData.products
    }

    const fetchNews = async () => {
        const res = await fetch('http://127.0.0.1:8000/local-news/')
        const data = await res.json()
        return data
    }

    return {
        products: fetchProducts(),
        news: fetchNews()
    }
}