import { useContext } from "react";
import { CartContext } from "../context/context";

export const useCart = () => useContext(CartContext);
