import React, { useState } from "react";
import { assets } from "../../assets/assets";
import './Fooditem.css';
import { useRecoilState } from "recoil";
import {  addItem, Itemcount, removeItem } from "../../Context/atom";
export function Fooditem({id,index,name,price,desc,img}){
    //declaring state variable here bcz only it will need it
    //const[count,Setcount]=useState(0 );//not good practice bcz same state will be creadted 32 times for 32 products
    const [count,setCount]=useRecoilState(Itemcount);
    const [remove,setRemove]=useRecoilState(removeItem);
    const [add,setAdd]=useRecoilState(addItem);
    return(
        <div className="food-item">
            <div className="img-container">
                
                <img src={img} className="img"/>
                
                {!count[id] ? <img src={assets.add_icon_white} className="add" onClick={()=>setCount(prevCount => ({...prevCount, [id]:1})) }
             /> : 
                <div className="item-count">
                    <img onClick={()=>{setRemove(id)}} src={assets.remove_icon_red} alt="" />
                    <p className="counter">{typeof count[id] === 'number' ? count[id] : 'Invalid Count'}</p>{/* unnecessary but throwing error */}
                    <img onClick={()=>setAdd(id)} src={assets.add_icon_green} alt="" />


                </div>}
            </div>
            <div className="info">
                <div className="rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />

                </div>
                {/* <p className="item-desc"> {desc}</p> */}
                <p className="price">${price}</p>

            </div>
             

        </div>
    )
}