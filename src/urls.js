
const restaurants = {
    Bittipannu: { provider: 'sodexo',   id: 5865 },
    Radis:      { provider: 'sodexo',   id: 5859 },
    Fuuga:      { provider: 'sodexo',   id: 5868 },
    Rajacafé:   { provider: 'sodexo',   id: 5861 },
    Lozzi:      { provider: 'sonaatti', id: 137828 },
    Libri:      { provider: 'sonaatti', id: 137814 },
    Syke:       { provider: 'sonaatti', id: 137833 },
    Tilia:      { provider: 'sonaatti', id: 137838 },
    Piato:      { provider: 'sonaatti', id: 110874 },
    Wilhelmiina:{ provider: 'sonaatti', id: 137866 }
}

const urls = {
    sodexo: "http://www.sodexo.fi/ruokalistat/output/daily_json/$menuId/$year/$month/$day/fi",
    sonaatti: "http://www.sonaatti.fi/api/restaurant/menu/day?date=$year-$month-$day&language=fi&restaurantPageId=$menuId"
}

const corsAnyWhere = "https://cors-anywhere.herokuapp.com/"

export function generateURL(menu) {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const restaurant = restaurants[menu]
    const {provider, id} = restaurant
    const apiURL = corsAnyWhere + urls[provider]
    return apiURL.replace("$menuId", id).replace("$day", day).replace("$month", month).replace("$year", year)
}
