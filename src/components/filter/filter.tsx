import React, { useState } from 'react';
import './filter.scss'
import { useDispatch} from 'react-redux';
import { add_filter, remove_filter } from '../../redux/filterSlice';

export default function Filter(props: IProps) {
    const dispatch = useDispatch();
    
    let [is_selected, setIs_selected] = useState(false);
    const handelClick = () => {
        if(is_selected){
            dispatch(remove_filter(props.filter));
            setIs_selected(false)
        } else {
            dispatch(add_filter(props.filter));
            setIs_selected(true)
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