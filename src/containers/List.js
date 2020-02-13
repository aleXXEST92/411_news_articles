import { connect } from 'react-redux'
import List from '../components/List'
import { fetchArticles } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

// write mapDispatchToProps below
const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles: (article) => {
        console.log("foo")
        dispatch(fetchArticles(article))
    },
  }
}

// add mapDispatchToProps instead of null
export default connect(mapStateToProps, mapDispatchToProps)(List)