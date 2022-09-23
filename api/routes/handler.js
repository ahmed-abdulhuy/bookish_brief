const express = require('express');
const router = express.Router();
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'books_list'
});

router.get('/api/books', (req, res) => {
    let filters = req.query.filter;
    if(filters !== undefined && filters !== ''){
        filters = [...new Set(filters.split('|'))].filter(e=>e)
        filters = filters.map(filter=> `id IN (SELECT book_id FROM \`${filter}\`)`).join(' AND ')
    }
    console.log('filters:', filters);
    // simple query
    connection.query(
        `SELECT * FROM \`Books\` WHERE ${filters? filters: 1}`,
        function(err, results, fields) {
            console.log('================start data fetching=====================')
            console.log(results); // results contains rows returned by server
            res.end(JSON.stringify(results));
        },
    );
});

router.post('/addBook', (req, res) => {
    console.log('=====req====\n');
    console.log(req.body)
    const {title, author, brief, selectedCatigory } = req.body 
    const book = {title, author, brief}
    console.log("selected catigories", selectedCatigory)
    let sql = 'INSERT INTO Books SET ?'
    
    connection.query(sql, book, (err, result) => {
        if(err) throw err;
        console.log("inserted book id", result.insertId)
        res.send('book is added.')

        if(selectedCatigory.length !== 0) {
            selectedCatigory.forEach((catigory) => {
                sql = `INSERT INTO ${catigory} SET ?`;
                connection.query(sql, {'book_id':result.insertId})
            })
        }
    })



    res.status(200)
})

router.delete('/deleteBook/:id', (req, res) => {
    console.log('===============================req=========================');
    console.log(req.params)
    const book_id = req.params;
    const sql = 'DELETE FROM Books WHERE ?'
    connection.query(sql, book_id, (err, result) => {
        if(err) throw err;

        console.log(result);
        res.send('book is deleted')

    })

    res.status(204)
})

module.exports = router;