
export function parseMenu(json) {
    
    // Palautetaan sodexon menut sellaisenaan.
    if (json.meta) {
        return json
    }

    const returnableItem = {
        courses: []
    }

    json.LunchMenu.SetMenus.forEach(setMenu => {
        setMenu.Meals.forEach(meal => {
            const singleCourse = {}
            singleCourse.category = setMenu.Name
            singleCourse.title_fi = meal.Name
            singleCourse.price = setMenu.Price
            singleCourse.properties = meal.Diets.join(", ")
            returnableItem.courses.push(Object.assign({}, singleCourse))
        })
    })

    return returnableItem
}