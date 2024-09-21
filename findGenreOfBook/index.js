const input = document.getElementById('Input')
const output = document.getElementById('Output')
const button = document.querySelector('button')

class Book{
    constructor(name, id, genre){
        this.name = name
        this.id = id
        this.genre = genre
    }
    bookName(){
        return `${this.name}`
    }
    bookGenre(){
        return `${this.genre}`
    }
}
const Books = [
    new Book("Story", 1, 2000),
    new Book("Fiction", 2, 2001),
    new Book("Horror", 3, 2002),
    new Book("Funny", 4, 2003)
]


const ul = document.getElementById('list')

Books.forEach(book => {
    const li = document.createElement('li')

    li.innerText = book.bookName()

    ul.appendChild(li)
});

button.addEventListener('click', function(){
    const b = input.value.trim()
    const bk = Books.find(book => book.name === b)
    if(bk){
        output.value = bk.bookGenre()
    }else{
        output.value = `genre not found for ${b} book`
    }
})