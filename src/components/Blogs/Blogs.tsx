import React from 'react'
import './Blogs.scss'
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useFetchBlogsQuery } from '../../redux/blogsAPI';
// import { get_all } from '../../redux/filterSlice'; 

export default function Blogs() {
  
  const filter = useSelector((state: RootState) => state.filter.filter)
  
  const {data=[], isFetching} = useFetchBlogsQuery(filter);

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
}