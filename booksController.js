const books = require("../books")


//get all books
const getBooks = (req, res)=>{
    res.status(200).json(books)


}

//delete a book
const deleteBook = async(req, res)=>{
    const foundBook = await books.findByTittle(req.params.title)
    if (found){
        foundBook.remove()
        res.json({msg:"book removed"})
    } else{
        res.status(404).json({error:"Book not found"})
    }

}






module.exports=(getBooks)