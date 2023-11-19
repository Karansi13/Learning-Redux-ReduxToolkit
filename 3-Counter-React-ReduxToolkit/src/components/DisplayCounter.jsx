import { useSelector } from 'react-redux' 

const DisplayCounter = () => {
    
    // Destructuring
    const { counterVal } = useSelector((store) => store.counter)
    return (
        <p className="lead mb-4">Quickly design and customize responsive: { counterVal }</p>
    )
}

export default DisplayCounter