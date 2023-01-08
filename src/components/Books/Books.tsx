import { useFetchBooksQuery } from '../../redux/booksAPI';
import { RootState } from '../../redux/store';
import Card from '../Card/card';
import { useSelector } from 'react-redux';
import React from 'react'
import './Books.scss'

export default function Books() {
  
  const filter = useSelector((state: RootState) => state.filter.filter)
  const {data=[], isFetching} = useFetchBooksQuery(filter);

  return (
    <div className='Books'>
      {
        isFetching?<h1>loading..</h1> : 
          data.map((book:IBook) => (
            <Card {...book} key={book.id}></Card>
          ))
      }
    </div>
  );
};

interface IBook {
  "id": number
  "title": string
  "breif": string
  "author": string
}