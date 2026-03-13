//product into the catalog
const catalog = [
    {
        "title":"orange",
        "category":"fruit",
        "price": 15.99,
        "image":"oranges.jpg",
        "_id":"1" //unique id for the product

    },
    {
        "title":"apple",
        "category":"fruit",
        "price": 20.99,
        "image":"apple.jpg",
        "_id":"2" //unique id for the product
    },
    {
        "title":"strawberry",
        "category":"berry",
        "price": 15.99,
        "image":"strawberries.jpg",
        "_id":"3" //unique id for the product
        },
];

class DataService {
    getProducts() {
        return catalog;
    }
}

export default DataService;  

