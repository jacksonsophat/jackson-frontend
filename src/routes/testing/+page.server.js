export const load = async ({ fetch, cookies }) => {


    let select_city = ''
    if (cookies.get('select_city')) {
        select_city = cookies.get('select_city')
    } else {
        select_city = 'austin'
    }

    const fetchNews = async () => {
        const res = await fetch(`http://127.0.0.1:8000/?select_city=${select_city}`)
        const data = await res.json()
        return data
    }

    return {
        news: fetchNews(),
        select_city
    }
}