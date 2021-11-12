import {Link} from 'react-router-dom';

export default function Header(props){
    return (
        <div className = 'top'>
            <h1>Pizza Pizza Pizza</h1>
            <Link to = '/pizza' id = 'order-pizza'> Order Pizza</Link>
        </div>  
    )
}