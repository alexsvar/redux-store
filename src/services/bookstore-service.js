export default class BookstoreService {

  data = [
    {
      id: 1,
      coverImage: 'http://bookash.pro/b/5f/API-yandeks-Google-i-drugih-populyarnyh-veb-servisov-gotovye-resheniya-dlya-vashego-saita-viktor-pet.jpg',
      title: 'API Google/Yandex',
      author: 'Susan J. Fowler',
      price: 32
    },
    {
      id: 2,
      coverImage: 'http://bookash.pro/b/ff/Release-it-proektirovanie-i-dizain-po-dlya-teh-komu-ne-vse-ravno-maikl-neigard.jpg',
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 40
    }
  ]

  getBooks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }
}
