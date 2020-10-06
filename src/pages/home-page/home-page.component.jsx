import React from 'react'

// Styles
import './home-page.styles.scss'

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Search Section */}
            <div className="search-form"></div>
            {/* Search results section */}
            <div className="search-results">
                {/* Here goes the search result items */}
                <div className="search-result"></div>
                <div className="search-result"></div>
                <div className="search-result"></div>
            </div>
            <div className="navigation-btns">
                <div className="prev-page-btn"></div>
                <div className="next-page-btn"></div>
            </div>
        </div>
    )
}

export default HomePage
