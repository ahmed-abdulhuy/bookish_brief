import { useFetchBlogsQuery } from '../../redux/blogsAPI';
import { RootState } from '../../redux/store';
import Card from '../Card/card';
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
            <Card {...blog} key={blog.id}></Card>
          ))
      }
    </div>
  );
};

interface IBlog {
  "id": number
  "title": string
  "brief": string
  "author": string
}