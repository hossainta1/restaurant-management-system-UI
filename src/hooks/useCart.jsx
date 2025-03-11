import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAuth from "./useAuth";

const useCart = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
  // load data using tan stack queary


  const {refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
        return res.data;
    }
  });
  return [cart, refetch];
};

export default useCart;
