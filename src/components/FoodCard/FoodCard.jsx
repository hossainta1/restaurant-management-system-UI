import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
        <div className="card-body">
          <h2 className="card-title flex flex-col items-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;