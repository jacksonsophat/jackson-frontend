export const load = async ({ fetch, cookies }) => {

    let select_city = ''
    if (cookies.get('select_city')) {
        select_city = cookies.get('select_city')
    } else {
        select_city = 'houston'
    }


    const fetchNews = async () => {
        // const res = await fetch(`http://127.0.0.1:8000/local-news/?select_city=${select_city}`)
        const res = await fetch(`http://150.136.7.63/local-news/?select_city=${select_city}`)
        // const res = await fetch('http://150.136.7.63/local-news/')
        const data = await res.json()
        return data
    }

    return {
        news: fetchNews(),
        select_city
    }
}