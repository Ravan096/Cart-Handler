import React from 'react';
import  {toast}  from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

    const productlist=[
        {name:"MacBook Air",
         price:1200,
         imgsrc: "data:image/jpeg;base64,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",
         id:"mackbookair",},
        {
            name:"Shoes",
            price:430,
            imgsrc: "data:image/jpeg;base64,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",
            id: "shoesair",
        },
        {
            name:"IPhone",
            price: 999,
            imgsrc:'data:image/jpeg;base64,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',
            id:'iphone14pro',
        },
        {
            name:"Black Printed Shirt",
            price: 399,
            imgsrc:'data:image/jpeg;base64,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',
            id:'blackprintedshirt',
        }
    ];



    const dispatch= useDispatch();



    const AddtoCartHandler=(options)=>{
        // return(
            dispatch({type:'addtocart',payload:options});
            dispatch({type:'calculateprice'});
            toast.success("Added to Cart");
            console.log(options);
        // )
    };

  return (
    <div className='home'>
        {
            productlist.map((i)=>(
                (
                    <ProductCard  name={i.name} price={i.price}
                    imgsrc={i.imgsrc} id={i.id} key={i.id}
                    handler={AddtoCartHandler}/>
                )
            ))
        }
    </div>
  )
}


const ProductCard=({name, id, price, handler, imgsrc})=>{
    return(
        <div className='productcard'>
            <img src={imgsrc} alt={name} />
        <h3>{name}</h3>
        <h4>${price}</h4>
        <button onClick={()=>handler({name, price, imgsrc,id,
             quantity:1})}>Add To Cart</button>
        </div>
    )
}
export default Home