import React, { useState } from 'react';
import './filter.scss'
import { useDispatch} from 'react-redux';
import { add_filter, remove_filter } from '../../redux/filterSlice';

export default function Filter(props: IProps) {
    const dispatch = useDispatch();
    
    let [isSelected, setIsSelected] = useState(false);
    const handelClick = () => {
        if(isSelected){
            dispatch(remove_filter(props.filter));
            setIsSelected(false)
        } else {
            dispatch(add_filter(props.filter));
            setIsSelected(true)
        }
    };
    
    return (
        <button 
        className={ isSelected? 'selected_filter': '' }
        onClick={handelClick} 
        
        >{ props.filter }</button>    
    )
}

interface IProps {
    filter: string
}