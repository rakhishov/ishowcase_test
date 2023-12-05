import Header from "../Header";
import { useParams } from 'react-router-dom';
import WatchSpec from "../WatchSpec";

const Itempage = () =>{
    const { itemId } = useParams<{ itemId: string }>();
    return(
        <>
        <Header/>
        {itemId? <WatchSpec id={itemId}/> : <p>hi</p> }
        </>
    )
}

export default Itempage;