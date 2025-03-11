import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const asxiosSecure = useAxiosSecure();

  // cart button
  const handleAddToCart = (food) => {
    if (user && user.email) {
      // send cart item send to database
      const cartItem = {
         menuId : _id,
         email : user.email,
         name,
         image,
         price,
      }

      asxiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:  `${name} added Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

    } 
    
    
    else {

      Swal.fire({
        title: "You are not Loggrd in",
        text: "Please login for Add item in the Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to log in page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title flex flex-col items-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
