import { food_list } from "../assets/assets";
import { atom }from 'recoil';
import { selector } from "recoil";

export const foodListState=atom({
    key: 'foodListState',
    default: food_list
});

export const Itemcount=atom({
    key:"itemcount",
    default: {}
});



export const addItem= selector({
    key:"additem",
    get: ({get})=>{
        return get(Itemcount);
    },
    // Setitemcount can be a function that takes the previous value and returns a new value
    set: ({ set }, itemid) => {
        set(Itemcount, (prevItemcount) => {
          if (!prevItemcount[itemid]) {
            return { ...prevItemcount, [itemid]: 1 };
          } else {
            return { ...prevItemcount, [itemid]: prevItemcount[itemid] + 1 };
          }
        });
      }
      
})

export const removeItem=selector({
    key:"removeItem",
    get: ({get})=>{
        return get(Itemcount);
    },
    set: ({set}, itemid)=>{
        set(Itemcount,(prevItemcount)=>{
            if(prevItemcount[itemid]>0){
                 return{...prevItemcount, [itemid]:prevItemcount[itemid]-1}
            }
            return prevItemcount
           
        })
    }
})