import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, pageName, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}{pageName}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    pageName: '',
    title: 'Welcome To EseShop | ',
    description: 'We sell the best products for cheap',
    keywords: 'electronics, buy electronics, cheap electronics'
}

export default Meta
