"use client";
import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "@/types/Product";
import { useAppDispatch } from "@/lib/hooks";
import {
  createProduct,
  getListProduct,
  updateProduct,
} from "@/store/ProductSlice/Product.thunks";

export function DialogForm(props: any) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const handleOpen = () => setOpen(!open);
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();
  const onSubmit: SubmitHandler<Product> = async (data) => {
    if (props.title === "Add Product") {
      await dispatch(createProduct(data));
      await dispatch(getListProduct());
      reset();
      setOpen(false);
    }
    if (props.onTitle === "Update") {
      await dispatch(updateProduct({ ...data, _id: props._id }));
      await dispatch(getListProduct());
      setOpen(false);
    }
  };

  useEffect(() => {
    if (props.onTitle === "Update") {
      setValue("title", props.title);
      setValue("image", props.image);
      setValue("price", props.price);
      setValue("description", props.description);
    }
    if (props.onTitle === "Add Product") {
      reset();
    }
  }, []);
  return (
    <>
      <Button onClick={handleOpen} placeholder={undefined}>
        {props.onTitle ?? props.title}
      </Button>
      <Dialog
        open={open}
        size="xs"
        handler={handleOpen}
        placeholder={undefined}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between">
            <DialogHeader
              className="flex flex-col items-start"
              placeholder={undefined}
            >
              {props.onTitle ?? props.title}
            </DialogHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <DialogBody placeholder={undefined}>
            <div className="grid gap-4 pb-2">
              <Typography
                className="-mb-1"
                color="blue-gray"
                variant="h6"
                placeholder={undefined}
              >
                Title
              </Typography>
              <Input
                label="Title"
                crossOrigin={undefined}
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-xs text-red-600">Field is required</p>
              )}
              <Typography
                className="-mb-1"
                color="blue-gray"
                variant="h6"
                placeholder={undefined}
              >
                Url image
              </Typography>
              <Input
                label="Url image"
                crossOrigin={undefined}
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-xs text-red-600">Field is required</p>
              )}
              <Typography
                className="-mb-1"
                color="blue-gray"
                variant="h6"
                placeholder={undefined}
              >
                Price
              </Typography>
              <Input
                label="Description"
                crossOrigin={undefined}
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-xs text-red-600">Field is required</p>
              )}
              <Typography
                className="-mb-1"
                color="blue-gray"
                variant="h6"
                placeholder={undefined}
              >
                Description
              </Typography>
              <Textarea
                label="Description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="text-xs text-red-600">Field is required</p>
              )}
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2" placeholder={undefined}>
            <Button
              variant="text"
              color="gray"
              onClick={handleOpen}
              placeholder={undefined}
            >
              cancel
            </Button>
            <Button
              variant="gradient"
              type="submit"
              color="gray"
              placeholder={undefined}
            >
              submit
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
