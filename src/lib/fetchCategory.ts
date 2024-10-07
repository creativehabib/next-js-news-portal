export const fetchCategory = async () => {
    try {
        const response = await fetch(`https://bn.ebdresults.com/api/category-list`);
        if(!response.ok) {
            throw new Error(`Failed to fetch category: ${response.status}`);
        }
        return response.json();
    } catch (error){
        console.error('Error fetching category!', error);
        return[]
    }
}