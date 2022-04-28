import React, {useEffect, useState} from 'react'
import './Blogs.scss'


export default function Blogs() {
  useEffect( () => {
    fetchItems();
}, []);

const [items, setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch('/api/blogs');
    console.log(data)
    const items = await data.json();
    console.log(items)
    setItems(items);

};  
  return (
    <div className='blogs'>
      {
        items.map((blog:IBlog) => (
          <div>
            <h1>{blog.name}</h1>
            <p>{blog.message}</p>
          </div>
        ))
      }
    </div>
  );
};


interface IBlog {
  "name": string
  "message": string
}