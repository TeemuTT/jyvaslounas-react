
export function parseMenu(json) {
    
    const returnableItem = {
        courses: []
    }

    if (!json) {
        return returnableItem
    }
    
    // Return sodexo menus as is.
    if (json.meta) {
        return json
    }

    if (json.LunchMenu) {
        json.LunchMenu.SetMenus.forEach(setMenu => {
            setMenu.Meals.forEach(meal => {
                const singleCourse = {}
                singleCourse.title_fi = meal.Name
                singleCourse.category = setMenu.Name
                singleCourse.price = setMenu.Price
                singleCourse.properties = meal.Diets.join(", ")
                returnableItem.courses.push(Object.assign({}, singleCourse))
            })
        })
    }

    return returnableItem
}
