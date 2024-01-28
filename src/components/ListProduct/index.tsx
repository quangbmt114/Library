"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectListProduct } from "@/store/ProductSlice";
import { getListProduct } from "@/store/ProductSlice/Product.thunks";
import { useEffect } from "react";
import { CardProduct } from "../CardProduct";
import { authState } from "@/store/AuthSlice";

function ListProduct() {
  const dispatch = useAppDispatch();
  const stateAuth = useAppSelector(authState);
  const dataListProduct = useAppSelector(selectListProduct);
  console.log("dataListProduct", dataListProduct);

  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-5">
      {dataListProduct?.map((item) => (
        <CardProduct {...item} key={item._id} onState={stateAuth} />
      ))}
    </div>
  );
}

export default ListProduct;
