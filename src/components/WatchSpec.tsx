import { useEffect, useState } from "react";
import $ from 'jquery';
import './WatchSpec.css';
import watchPhotos from "./WatchPhotos";
interface WatchSpecProps {
    id: string;
}


function generateSpecs(item: any){
    let specs = [];
    for (const key in item) {
        if (item.hasOwnProperty(key) && key!='id' && key!='pid' && key!='type'){
            const value = item[key];
            console.log(`${key}: ${value}`);
            specs.push(
                <div className="spec-item">
                    <span className="spec-title">{key}</span>
                    <span className="spec-text">{value}</span>
                </div>
            )
        }
    }
    return specs;

}


const WatchSpec: React.FC<WatchSpecProps> = ({ id }) => {
    const [item, setItem] = useState();
    useEffect(() => {
        $.ajax({
            url: `http://localhost:8001/products/items/`+id,         
            method: 'get',
            dataType: 'json',
            data: {},     
            success: function(data){   
                console.log(data);
                setItem(data);
            }
        });
    }, []);
    return(
        <div>
            <div className="spec">
                <div className="spec-description">
                {item && generateSpecs(item)}
                </div>
                <div className="spec-image-div">
                {item && <img src={watchPhotos[item['model_number']-100001]} className="spec-image" alt=""/>}
                </div>
            </div>
        </div>
    )
}

export default WatchSpec;