// use fetch with the url parameter
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=306a3a071f224f729829308fa9f5896a'

const articleAction = (articles) => {
    return {
        type: 'FETCH_ARTICLES',
        value: articles
    }
}

export const fetchArticles = () => {
    // return a function that calls fetch and dispatches "articleAction()"
    // with the list of articles from the API call
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                response.articles
                dispatch(articleAction)
            })
    }
}