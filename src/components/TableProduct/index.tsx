"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectListProduct } from "@/store/ProductSlice";
import {
  deleteProduct,
  getListProduct,
} from "@/store/ProductSlice/Product.thunks";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { DialogForm } from "../DialogForm";

const TABLE_HEAD = ["Name", "Image", "Price", "Description", "Action"];

export const TableProduct: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const dataListProduct = useAppSelector(selectListProduct);
  const handleUpdateProduct = () => {
    setOpen(true);
  };
  const handleDeleteProduct = async (id: string) => {
    await dispatch(deleteProduct(id)).then(() => dispatch(getListProduct()));
  };

  useEffect(() => {
    dispatch(getListProduct());
  }, []);
  return (
    <Card className="pt-4 h-full w-full" placeholder={undefined} shadow={false}>
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none"
        placeholder={undefined}
      >
        <div className="mb-8 flex items-center justify-between  gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" placeholder={undefined}>
              PRODUCT
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <DialogForm title={"Add Product"} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              crossOrigin={undefined}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll p-0" placeholder={undefined}>
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                    placeholder={undefined}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataListProduct?.map((item, index) => {
              const classes = "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      {/* <Avatar
                          src={image[0]}
                          alt={name}
                          size="sm"
                          placeholder={undefined}
                        /> */}
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          placeholder={undefined}
                        >
                          {item.title}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Avatar
                        src={item.image}
                        alt={item.title}
                        size="sm"
                        placeholder={undefined}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={item.price}
                        color={"green"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      {item.description}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <DialogForm onTitle={"Update"} {...item} />
                    <Tooltip content="Del Product">
                      <IconButton
                        variant="text"
                        placeholder={undefined}
                        onClick={() => handleDeleteProduct(item._id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter
        className="flex items-center justify-between border-t border-blue-gray-50 p-4"
        placeholder={undefined}
      >
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
          placeholder={undefined}
        >
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" placeholder={undefined}>
            Previous
          </Button>
          <Button variant="outlined" size="sm" placeholder={undefined}>
            Next
          </Button>
        </div>
      </CardFooter> */}
    </Card>
  );
};
