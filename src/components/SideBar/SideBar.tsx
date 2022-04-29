import React, { useEffect, useState } from 'react'
import './SideBar.scss'
import SearchBar from '../SearchBar/SearchBar'
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { filter_web_dev } from '../../redux/blogsSlice';

export default function SideBar() {
  const blogs = useSelector((state: RootState) => state.blogs.blogs)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  // const fetchBlogs = async () => {
  //   const data = await fetch('/api/blogs/web_dev');
  //   const blogs = await data.json()
    
  // }
  
  return (
    <div className='sidebar'>
      {/* <SearchBar /> */}
      <button onClick={() => dispatch(filter_web_dev()) }>web_dev</button>
    </div>
  )
}
