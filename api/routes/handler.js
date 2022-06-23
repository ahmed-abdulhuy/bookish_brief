const express = require('express');
const router = express.Router();
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'books_list'
});

router.get('/api/blogs', (req, res) => {
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


module.exports = router;