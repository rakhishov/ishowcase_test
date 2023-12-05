import './WatchGrid.css';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import watchPhotos from './WatchPhotos';
import { Link } from 'react-router-dom';

interface Watch {
    id: number;
    pid: number;
    type: string;
    model_number: number;
    model_case: string;
    water_resistance: string;
    movement: string;
    caliber: string;
    power_reserve: string;
    bracelet: string;
    dial: string;
    large_title: string;
    small_title: string;
    description: string;
    price: number;
}
function getWatches(watches: any[]){
    let watchGrid = [];
    for(let i = 0; i < watches.length; i++){
        let src = watches[i]['model_number'];
        watchGrid.push(
            
            <div className="watch-item" key={i}>
            <Link to={`/items/${watches[i]['id']}`}>
                <div className='watch-img'>
                    {<img src={watchPhotos[src-100001]} alt=""/>}
                </div>  
            </Link>
                <span className='subtitle'>Rolex</span>
                <span className='small-title'>{watches[i]['small_title']}</span>
                <span className='small-description'>{watches[i]['description']}</span>
            </div>
        )
    }
    return watchGrid;

}

function flattenArrayOfObjects(arr: any[]): Watch[] {
    return arr.reduce((result: Watch[], current: any) => {
        if (Array.isArray(current)) {
            result = result.concat(flattenArrayOfObjects(current));
        } else {
            result.push(current);
        }
        return result;
    }, []);
}

const WatchGrid = () => {
    const queryParams = new URLSearchParams(location.search);
    const filterValue = queryParams.get('filter')
    let url: string;
    if(filterValue == 'all' || !filterValue){
        url = 'http://localhost:8001/products/category';
    }
    else{
        url = 'http://localhost:8001/products/category/' + filterValue;
    }
    const [watches, setWatches] = useState<any[]>([]);
    useEffect(() => {
        $.ajax({
            url: url,         
            method: 'get',
            dataType: 'json',
            data: {},     
            success: function(data){   
                var w = flattenArrayOfObjects(data);
                setWatches(w);
            }
        });
    }, []);

    return(
        <div className='container'>
        <div className="watch-container">
            {getWatches(watches)}
        </div>
        </div>
    )
}

export default WatchGrid;