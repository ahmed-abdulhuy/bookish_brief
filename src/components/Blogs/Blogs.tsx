import React, {useEffect, useState} from 'react'
import './Blogs.scss'
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchBlogsQuery } from '../../redux/blogsSlice';
// import { get_all } from '../../redux/blogsSlice';
 

export default function Blogs() {
  // const blogs = useSelector((state: RootState) => state.blogs.blogs)
  const dispatch = useDispatch()
  console.log('=======================')
  // console.log(blogs)

  const {data=[], isFetching} = useFetchBlogsQuery();
  
  // useEffect( () => {
    // dispatch(get_all());
    // fetchItems();
  // }, []);
  
  // const [items, setItems] = useState([]);
  
  // const fetchItems = async () => {
    //     const data = await fetch('/api/blogs');
    //     console.log(data)
//     const items = await data.json();
//     console.log(items)
//     setItems(items);
// };  
// const blogs = data;

  return (
    <div className='blogs'>
      {
        data.map((blog:IBlog) => (
          <div className="card" key={blog.id}> {blog.blog} </div>
        ))
      }
    </div>
  );
};


interface IBlog {
  "id": number
  "blog": string
  // "message": string
}