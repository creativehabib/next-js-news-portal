export const fetchNews = async (category='', search="") => {
    try {
        const response = await fetch(`https://bn.ebdresults.com/api/latest-post?category=${category}&search=${search}`);
        if(!response.ok) {
            throw new Error(`Failed to fetch news: ${response.status}`);
        }
        return response.json();
    } catch (error){
        console.error('Error fetching news!', error);
        return[]
    }
}