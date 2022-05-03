import { useFetchBlogsQuery } from '../../redux/blogsAPI';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import React from 'react'
import './Blogs.scss'

export default function Blogs() {
  
  const filter = useSelector((state: RootState) => state.filter.filter)
  const {data=[], isFetching} = useFetchBlogsQuery(filter);

  return (
    <div className='blogs'>
      {
        isFetching?<h1>loading..</h1> : 
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