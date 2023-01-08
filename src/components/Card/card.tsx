import "./card.scss"

export default function Card(props: IProps) {
    
    const handelDelete = (id: number) => {
        fetch(`/deleteBook/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })//.then(() => setTimeout(() => window.location.reload(), 250))
    }

    return (
        <div className="card">
            <div className="label">
                <span>Title:</span><p>{props.title}</p>
            </div>

            <div className="label">
                <span>Author:</span><p>{props.author}</p>
            </div>
            
            <div className="label">
                <span>Breif:</span><p>{props.breif}</p>
            </div>

            <button onClick={()=>{handelDelete(props.id)}} className="button delete-button" >delet</button>
            
        </div>
    )
}

interface IProps {
    id: number
    title: string
    author: string
    breif: string
}