import Client from './database.js';
// import {express} from 'express';
// const router = express.Router();

export default function book_routes (router) {
    router.get('/api/books', async (req, res) => {
        try {
            let filters = req.query.filter;
            if(filters !== undefined && filters !== '') {
                filters = [...new Set(filters.split('|'))].filter(e=>e)
                filters = filters.map(filter=> `id IN (SELECT book_id FROM ${filter})`).join(' AND ')
            }
            // simple query
            const conn = await Client.connect();
            const sql = `SELECT * FROM books WHERE ${filters? filters: true}`
            const result = await conn.query(sql);
            conn.release()
            res.end(JSON.stringify(result.rows));
        } catch (err) {
            throw new Error(`Cannot get Data ${err}`)
        }
    });
    
    router.post('/api/addBook', async (req, res) => {
    try {
    
        const {title, author, brief, selectedCatigory } = req.body 
        const book = [title, author, brief]
        const conn = await Client.connect();
        let sql = 'INSERT INTO books (title, author, breif) VALUES ($1, $2, $3) RETURNING *'
        
        const result = await conn.query(sql, book)

        if(selectedCatigory.length !== 0) {
            selectedCatigory.forEach((catigory) => {
                sql = `INSERT INTO ${catigory} VALUES ($1)`;
                conn.query(sql, [result.rows[0].id])
            })
        }   
        res.send(200, 'book is added:', result.rows[0])
        } catch(err) {
            throw new Error(`Cannot get Data ${err}`)
        }
    })
    
    router.delete('/api/deleteBook/:id', async (req, res) => {
        const conn = await Client.connect()
        const book_id = req.params.id;
        const sql = 'DELETE FROM books WHERE id=($1)'
        await conn.query(sql, [book_id])
        conn.release();
        res.send('book is deleted')
        res.status(204)
    })    
}

