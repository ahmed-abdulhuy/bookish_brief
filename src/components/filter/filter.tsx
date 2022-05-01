import React, { useState } from 'react';
import './filter.scss'
import { useDispatch, useSelector} from 'react-redux';
import { add_filter, remove_filter } from '../../redux/filterSlice';
import { RootState } from '../../redux/store';

export default function Filter(props: IProps) {
    const filter = useSelector((state: RootState) => state.filter.filter);
    const dispatch = useDispatch();
    
    let [is_selected, setIs_selected] = useState(false);
    const handelClick = () => {
        if(is_selected){
            dispatch(remove_filter(props.filter));
            // is_selected = false
            setIs_selected(false)
            console.log('&&&&&&&&&&&&&&filter', filter)
        } else {
            dispatch(add_filter(props.filter));
            // is_selected = true
            setIs_selected(true)
            console.log('$$$$$$$$$$$$$$filter', filter)
        }
    };
    
    return (
        <button 
        className={ is_selected? 'selected_filter': '' }
        onClick={handelClick} 
        
        >{ props.filter }</button>    
    )
}

interface IProps {
    filter: string
}