
export default class BookstoreService {

    getBooks(){
        return [
            {
                id: 1,
                title: 'Prodiction-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 32,
                coverImage: "https://m.media-amazon.com/images/I/81D4AHNvMsL._AC_UF1000,1000_QL80_.jpg" },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard',
                price: 42,
                coverImage: "https://m.media-amazon.com/images/I/51YLCdLeopS.jpg" }
        ];
    }
}

