import React from 'react'
import MenuItem from './MenuItem'

function Menu({courses}) {
    let lastCategory = ''
    let shouldDrawCategory = false;
    return (
        <div className="menu">
            {courses.map((course, index) => {
                shouldDrawCategory = false
                if (lastCategory !== course.category) {
                    shouldDrawCategory = true
                    lastCategory = course.category
                }
                return (
                    <MenuItem key={index} course={course} shouldDrawCategory={shouldDrawCategory} />
                )
            })}
        </div>
    )
}

export default Menu
