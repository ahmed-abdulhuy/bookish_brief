import "./card.scss"

export default function Card(props: IProps) {
    return (
        <div className="card" key={props.id}>
            <div className="label">
                <span>title:</span><p>{props.title}</p>
            </div>

            <div className="label">
                <span>author:</span><p>{props.author}</p>
            </div>
            
            <div className="label">
                <span>breif:</span><p>{props.brief}</p>
            </div>
            
        </div>
    )
}

interface IProps {
    id: number
    title: string
    author: string
    brief: string
}