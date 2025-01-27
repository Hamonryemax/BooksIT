
export default class BookstoreService {

    data = [
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

    getBooks(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something went wrong'));
                } else {
                    resolve(this.data)
                }
            }, 700);
        });
    }
}

