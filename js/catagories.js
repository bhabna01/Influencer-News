function loadDatas() {
    let url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => disPlayNews(data.data.news_category))
        .catch(error => {
            throw (error);
        })
}
function newsToggle(category_id) {

    let url = ` https://openapi.programming-hero.com/api/news/category/${"0" + category_id}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())

        .then(data => disPlayCategoryItems(data.data))
}
function disPlayCategoryItems(details) {
    console.log(details.length);

    let itemsContainer = document.getElementById('items-number')
    itemsContainer.innerText = '';
    let span = document.createElement('span')
    span.innerHTML = `
       <span> ${details.length}</span>
        `;
    itemsContainer.appendChild(span);


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
newsToggle();