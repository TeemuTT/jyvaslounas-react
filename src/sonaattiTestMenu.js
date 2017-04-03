
export const sonaattiTestMenu = {
    "LunchMenu": {
        "DayOfWeek": "Torstai",
        "Date": "30.3.2017",
        "SetMenus": [
            {
                "SortOrder": 0,
                "Name": "KASVISLOUNAS",
                "Price": "2,60 / 5,70 / 8,00",
                "Meals": [
                    {
                        "Name": "Kikherne-bataattipataa",
                        "RecipeId": 7838,
                        "Diets": [
                            "*",
                            "A",
                            "G",
                            "L",
                            "M",
                            "Veg",
                            "VS"
                        ]
                    }
                ]
            },
            {
                "SortOrder": 0,
                "Name": "LOUNAS",
                "Price": "2,60 / 5,70 / 8,00",
                "Meals": [
                    {
                        "Name": "Kinkku-ananaspizzaa",
                        "RecipeId": 670,
                        "Diets": [
                            "A",
                            "L"
                        ]
                    }
                ]
            },
            {
                "SortOrder": 0,
                "Name": "LOUNAS",
                "Price": "2,60 / 5,70 / 8,00",
                "Meals": [
                    {
                        "Name": "Kalkkunaa rakuunakastikkeessa",
                        "RecipeId": 4946,
                        "Diets": [
                            "*",
                            "A",
                            "G",
                            "L"
                        ]
                    }
                ]
            },
            {
                "SortOrder": 0,
                "Name": "KEITTOLOUNAS",
                "Price": "2,60 / 5,70 / 8,00",
                "Meals": [
                    {
                        "Name": "Kreikkalaista turska-äyriäiskeittoa",
                        "RecipeId": 3411,
                        "Diets": [
                            "*",
                            "A",
                            "G",
                            "L",
                            "M"
                        ]
                    }
                ]
            },
            {
                "SortOrder": 0,
                "Name": "PAISTOPISTE",
                "Price": "4,95 / 9,00 / 10,00",
                "Meals": [
                    {
                        "Name": "Häränrintafocacciaa",
                        "RecipeId": 11310,
                        "Diets": [
                            "A",
                            "L"
                        ]
                    },
                    {
                        "Name": "Chilikermaviilikastiketta",
                        "RecipeId": 140,
                        "Diets": [
                            "A",
                            "G",
                            "L"
                        ]
                    },
                    {
                        "Name": "Paahdettuja lohkoperunoita",
                        "RecipeId": 10413,
                        "Diets": [
                            "G",
                            "L",
                            "M",
                            "Veg"
                        ]
                    }
                ]
            },
            {
                "SortOrder": 0,
                "Name": "JÄLKIRUOKA",
                "Price": "1,00",
                "Meals": [
                    {
                        "Name": "Mustikka-talkkunahyvettä",
                        "RecipeId": 3581,
                        "Diets": [
                            "A",
                            "L"
                        ]
                    }
                ]
            },
            {
                "SortOrder": 0,
                "Name": null,
                "Price": null,
                "Meals": []
            }
        ],
        "Html": ""
    },
    "RequireDietFilters": [
        {
            "Name": "GlutenFree",
            "TranslatedName": "Gluteeniton",
            "Diet": "G",
            "Selected": false,
            "Inactive": false,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "LactoseFree",
            "TranslatedName": "Laktoositon",
            "Diet": "L",
            "Selected": false,
            "Inactive": false,
            "AdditionalVisibleDiets": [
                "M"
            ]
        },
        {
            "Name": "LowLactose",
            "TranslatedName": "Vähälaktoosinen",
            "Diet": "VL",
            "Selected": false,
            "Inactive": true,
            "AdditionalVisibleDiets": [
                "L",
                "M"
            ]
        },
        {
            "Name": "NoMilk",
            "TranslatedName": "Maidoton",
            "Diet": "M",
            "Selected": false,
            "Inactive": false,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "Healthy",
            "TranslatedName": "Voi hyvin",
            "Diet": "*",
            "Selected": false,
            "Inactive": false,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "Vegetarian",
            "TranslatedName": "Soveltuu vegaaniruokavalioon",
            "Diet": "Veg",
            "Selected": false,
            "Inactive": false,
            "AdditionalVisibleDiets": []
        }
    ],
    "ExcludeDietFilters": [
        {
            "Name": "Garlic",
            "TranslatedName": "Sis. tuoretta valkosipulia",
            "Diet": "VS",
            "Selected": false,
            "Inactive": false,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "Allergens",
            "TranslatedName": "Sis. allergeeneja",
            "Diet": "A",
            "Selected": false,
            "Inactive": false,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "Fish",
            "TranslatedName": "Sis. kalaa",
            "Diet": "Kal",
            "Selected": false,
            "Inactive": true,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "Beef",
            "TranslatedName": "Sis. nautaa",
            "Diet": "Nau",
            "Selected": false,
            "Inactive": true,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "Pork",
            "TranslatedName": "Sis. sikaa",
            "Diet": "Sia",
            "Selected": false,
            "Inactive": true,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "Celery",
            "TranslatedName": "Sis. selleriä",
            "Diet": "Sel",
            "Selected": false,
            "Inactive": true,
            "AdditionalVisibleDiets": []
        },
        {
            "Name": "Nuts",
            "TranslatedName": "Sis. pähkinää / mantelia",
            "Diet": "Päh",
            "Selected": false,
            "Inactive": true,
            "AdditionalVisibleDiets": []
        }
    ],
    "RestaurantDietFilters": []
}

export const expectedSonaattiTestMenu = {
    courses: [
    {
        title_fi: 'Kikherne-bataattipataa',
        category: 'KASVISLOUNAS',
        price: '2,60 / 5,70 / 8,00',
        properties: '*, A, G, L, M, Veg, VS'
    },
    {
        title_fi: 'Kinkku-ananaspizzaa',
        category: 'LOUNAS',
        price: '2,60 / 5,70 / 8,00',
        properties: 'A, L'
    },
    {
        title_fi: 'Kalkkunaa rakuunakastikkeessa',
        category: 'LOUNAS',
        price: '2,60 / 5,70 / 8,00',
        properties: '*, A, G, L'
    },
    {
        title_fi: 'Kreikkalaista turska-äyriäiskeittoa',
        category: 'KEITTOLOUNAS',
        price: '2,60 / 5,70 / 8,00',
        properties: '*, A, G, L, M'
    },
    {
        title_fi: 'Häränrintafocacciaa',
        category: 'PAISTOPISTE',
        price: '4,95 / 9,00 / 10,00',
        properties: 'A, L'
    },
    {
        title_fi: 'Chilikermaviilikastiketta',
        category: 'PAISTOPISTE',
        price: '4,95 / 9,00 / 10,00',
        properties: 'A, G, L'
    },
    {
        title_fi: 'Paahdettuja lohkoperunoita',
        category: 'PAISTOPISTE',
        price: '4,95 / 9,00 / 10,00',
        properties: 'G, L, M, Veg'
    },
    {
        title_fi: 'Mustikka-talkkunahyvettä',
        category: 'JÄLKIRUOKA',
        price: '1,00',
        properties: 'A, L'
    }]
}
