import React, { useEffect, useState } from 'react'
import './SideBar.scss'
import SearchBar from '../SearchBar/SearchBar'
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add_filter } from '../../redux/filterSlice';

export default function SideBar() {
  const filter = useSelector((state: RootState) => state.filter.filter)
  const dispatch = useDispatch()
  console.log('filter:', filter)
  return (
    <div className='sidebar'>
      {/* <SearchBar /> */}
      <button onClick={() => dispatch(add_filter('web_dev')) }>web_dev</button>
      <button onClick={() => dispatch(add_filter('ml'))}>ml</button>
      <h1>{filter}</h1>
    </div>
  )
}
