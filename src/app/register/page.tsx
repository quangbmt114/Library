"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth";
import Link from "next/link";
type registerForm = {
  name: string;
  email: string;
  password: string;
};
export default function LoginCard() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerForm>();
  const onSubmit = handleSubmit(async (value) => {
    try {
      const data = await AuthService.signUp(value);
      // console.log("data", data);
      toast.success(data?.message);
      router.push("/login");
    } catch (error: any | null) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  });
  return (
    <Card className="w-96" placeholder={undefined}>
      <form onSubmit={onSubmit}>
        <CardHeader
          placeholder={undefined}
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white" placeholder={undefined}>
            SIGN UP
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4" placeholder={undefined}>
          <Input
            type="text"
            {...register("name", { required: true })}
            label="Name"
            size="lg"
            placeholder={undefined}
            crossOrigin={2}
          />
          {errors.name && (
            <p className="text-xs text-red-600">Field is required</p>
          )}
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            label="Email"
            size="lg"
            placeholder={undefined}
            crossOrigin={1}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email?.message}</p>
          )}
          <Input
            type="password"
            {...register("password", { required: true })}
            label="Password"
            size="lg"
            placeholder={undefined}
            crossOrigin={2}
          />
          {errors.password && (
            <p className="text-xs text-red-600">Field is required</p>
          )}
        </CardBody>
        <CardFooter className="pt-0" placeholder={undefined}>
          <Button
            type="submit"
            variant="gradient"
            fullWidth
            placeholder={undefined}
          >
            Sign Up
          </Button>
          <Typography
            variant="small"
            className="mt-6 flex justify-center"
            placeholder={undefined}
          >
            You have an account?
            <Typography
              placeholder={undefined}
              as="b"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              <Link href={"/login"}>Sign in</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </form>
    </Card>
  );
}
