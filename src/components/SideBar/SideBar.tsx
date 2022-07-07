import './SideBar.scss'
// import SearchBar from '../SearchBar/SearchBar'
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import Filter from '../filter/filter';


export default function SideBar() {
  const filter = useSelector((state: RootState) => state.filter.filter)
  return (
    <div className='sidebar'>
      {/* <SearchBar /> */}
      <Filter filter='web_dev'/>
      <Filter filter='ml' />
    </div>
  )
}
