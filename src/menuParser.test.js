
import {parseMenu} from './menuParser'
import {sodexoTestMenu} from './sodexoTestMenu'
import {sonaattiTestMenu, expectedSonaattiTestMenu} from './sonaattiTestMenu'

it('returns an object with empty courses array when LunchMenu is null', () => {
    const json = {
        LunchMenu: null
    }
    const expected = {
        courses: []
    }
    expect(parseMenu(json)).toEqual(expected)
})


it('returns an object with courses array when given sonaatti menu', () => {
    expect(parseMenu(sonaattiTestMenu)).toEqual(expectedSonaattiTestMenu)
})


it('returns the same menu when given a sodexo menu', () => {
    expect(parseMenu(sodexoTestMenu)).toEqual(sodexoTestMenu)
})


it('should handle null value', () => {
    const expected = {
        courses: []
    }
    expect(parseMenu(null)).toEqual(expected)
})
