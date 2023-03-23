export const fetchData = async () => {
    
    const categories = [
        {
            "id": "business",
            "name": "İş Dünyası"
        },
        {
            "id": "entertainment",
            "name": "Eğlence"
        },
        {
            "id": "general",
            "name": "Genel"
        },
        {
            "id": "health",
            "name": "Sağlık"
        },
        {
            "id": "science",
            "name": "Bilim"
        },
        {
            "id": "sports",
            "name": "Spor"
        },
        {
            "id": "technology",
            "name": "Teknoloji"
        }
    ]

    const categoryName = "Genel";
    const category = categories.find(cat => cat.name === categoryName);
    const categoryId = category.id;

    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'category=' + categoryId + '&' +
        'apiKey=82a392e5cfb84b50b350e9670a874da2';
    
    const data = localStorage.getItem('data');
    
    // if (data) {
    //     return JSON.parse(data);
    // }
    // else {
        var req = new Request(url);
    
        const response = await fetch(req)
            .then(response => response.json())
            .catch(err => console.error(err));

        localStorage.setItem('data', JSON.stringify(response));
    
        return response;
    // }

};


