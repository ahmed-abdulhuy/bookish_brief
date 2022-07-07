import { useState } from 'react';
import './card.scss'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useNavigate } from "react-router-dom"

export default function AddCard() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [brief, setBrief] = useState('');
    const [selectedCatigory, setSelectedCatigory] = useState('');
    const navigate = useNavigate()

    const animatedComponents = makeAnimated();

    const catigories = [
        {value: 'ml', label: 'ml'},
        {value: 'web_dev', label:'web_dev'}
    ];

    const handelSubmit = (e:any) => {
        e.preventDefault();
        const card = {title, author, brief, selectedCatigory};

        fetch('/addBook', {
            method: 'POST',
            headers: {"Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"},
            body: JSON.stringify(card)
        }).then(()=>window.location.reload())

        navigate('/');
    }

    const handelCatigory = (e:any) => {
        const catigories = e.map((option:any) => option.value)
        setSelectedCatigory(catigories)
    }
    
    return (
        <form className='card newCard' onSubmit={handelSubmit}>
                
                    {/* <label htmlFor="title">Title</label> */}
                    <input
                        type="text" 
                        id='title'
                        value={title}
                        required
                        className='text-input'
                        placeholder='Title...'
                        onChange={e => setTitle(e.target.value)} 
                     />

                    {/* <label htmlFor="author">Author</label> */}
                    <input 
                        type="text" 
                        id='author' 
                        value={author}
                        required
                        className='text-input'
                        placeholder='author...'
                        onChange={e => setAuthor(e.target.value)}
                    />
                
                    {/* <label htmlFor="brief">Brief</label> */}
                    <textarea  
                        id='brief' 
                        value={brief}
                        required
                        className='text-area'
                        placeholder='brief...'
                        onChange={e => setBrief(e.target.value)}
                    />

                <Select 
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={catigories}
                    onChange={handelCatigory}
                    className="selector"
                />
                
                <button className='button' id="submit">Save</button>

        </form>
    )
}