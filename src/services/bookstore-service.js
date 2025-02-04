
export default class BookstoreService {

    data = []

    getBooks(){
        return new Promise((resolve, reject) => {
                if (this.data) {
                    resolve(this.data);
                } else {
                    reject('No data available');
                }
        });
    }
}

