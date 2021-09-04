import React from 'react'
import PropTypes from 'prop-types'

// fas fa-star : Solid star
// fas fa-star-half-alt : Half solid star
// far fa-star : Regular star

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                <i style={{ color }}
                    className={
                        value >= 1
                            ? 'fas fa-star'
                            : value >= 0.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i style={{ color }}
                    className={
                        value >= 2
                            ? 'fas fa-star'
                            : value >= 1.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i style={{ color }}
                    className={
                        value >= 3
                            ? 'fas fa-star'
                            : value >= 2.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i style={{ color }}
                    className={
                        value >= 4
                            ? 'fas fa-star'
                            : value >= 3.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i style={{ color }}
                    className={
                        value >= 5
                            ? 'fas fa-star'
                            : value >= 4.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                ></i>
            </span>
            <span>{text && text}</span>
        </div>
    )
}

// Default props, which sets a default value to the props we sets their value here! 
Rating.defaultProps = {
    color: '#f8e825'
}

// validates the value we entered - it must have the same definition we defined!
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating
