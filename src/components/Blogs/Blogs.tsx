import React from 'react'
import './Blogs.scss'
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchBlogsQuery } from '../../redux/blogsAPI';
import { get_all } from '../../redux/filterSlice'; 

export default function Blogs() {
  
  const filter = useSelector((state: RootState) => state.filter.filter)
  // const dispatch = useDispatch()
  console.log('=======================')
  console.log('filter:', filter)

  const {data=[], isFetching} = useFetchBlogsQuery(filter);
  console.log('data:', data)
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