import React from 'react'

export function MenuItem({course, shouldDrawCategory}) {
    return (
        <div className="menuItem">
            {shouldDrawCategory ? <span className="categoryName">{course.category}</span> : <span/>}
            <span className="title_fi">{course.title_fi}</span>
            <span>{course.desc_fi}</span>
            <span>{course.price}</span>
            <span>{course.properties}</span>
        </div>
    )
}

export default MenuItem
