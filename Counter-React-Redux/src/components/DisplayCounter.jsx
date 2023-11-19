import { useSelector } from 'react-redux' 

const DisplayCounter = () => {
    const counter = useSelector((store) => store.counter)
    return (
        <p className="lead mb-4">Quickly design and customize responsive: {counter}</p>
    )
}

export default DisplayCounter