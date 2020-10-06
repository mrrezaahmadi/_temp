import React from 'react'

// Styles
import './search-result.styles.scss'

const SearchResult = () => {
    return (
        <div className="search-result">
            <div className="header">
                <a href="#" target="_blank">header</a>
            </div>
            <div className="subheader">
                subheader
            </div>
            <div className="content">
                <div className="thumbnail">content thumbnail</div>
                <div className="text">content text</div>
            </div>
        </div>
    )
}

export default SearchResult
