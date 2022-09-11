const app = Vue.createApp({

data () {
return {
    url: 'http://www.thenetninja.co.uk',
showBooks: true,
books: [
    {title: 'my life', author: 'me', img:'assets/1.jpg', isFav: true},
    {title: 'his life', author: 'him', img:'assets/2.jpg', isFav: false},
    {title: 'your life', author: 'you', img:'assets/3.jpg', isFav: true},
]
}
},
methods: {



toggleShowBooks() {
this.showBooks = !this.showBooks

},
toggleFav(book) {
    book.isFav = !book.isFav
    
    }
    },
    computed: {
        filteredBooks () {

            return this.books.filter((book) => book.isFav)
        }


    }
})
app.mount('#app')