import React from 'react'

function SingleNews(props) {
    
    return (
        <div>
            {console.log(props.news)}
            <h1></h1>
        </div>
    )
}

export default SingleNews

// renderNews = () => {
//     return news.map(newsObj => <SingleNews key={newsObj.id} news={newsObj} />)
// }