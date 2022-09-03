function loadDatas() {
    let url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => disPlayNews(data.data.news_category))
        .catch(error => {
            throw (error);
        })
}

function disPlayNews(news) {
    console.log(news);
    let newsContainer = document.getElementById('newsContainer')
    news.forEach(element => {
        let span = document.createElement('span')
        span.innerHTML = `
        <span href="" onclick="newsToggle(${element.category_id})">${element.category_name}</span>
        `
        newsContainer.appendChild(span)
    });
}
loadDatas();