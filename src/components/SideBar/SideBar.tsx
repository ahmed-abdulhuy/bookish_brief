import './SideBar.scss'
// import SearchBar from '../SearchBar/SearchBar'
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add_filter } from '../../redux/filterSlice';
import Filter from '../filter/filter';


export default function SideBar() {
  const filter = useSelector((state: RootState) => state.filter.filter)
  // const dispatch = useDispatch()
  console.log('filter:', filter)
  return (
    <div className='sidebar'>
      {/* <SearchBar /> */}
      {/* <button onClick={() => dispatch(add_filter('web_dev')) }>web_dev</button>
      <button onClick={() => dispatch(add_filter('ml'))}>ml</button> */}
      <Filter filter='web_dev'/>
      <Filter filter='ml' />
      <h1>{filter}</h1>
    </div>
  )
}
