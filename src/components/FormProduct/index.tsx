"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export function FormProduct() {
  return (
    <Card color="transparent" shadow={false} placeholder={undefined}>
      <Typography variant="h4" color="blue-gray" placeholder={undefined}>
        Product
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 justify-center ">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
            placeholder={undefined}
          >
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={1}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
            placeholder={undefined}
          >
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={2}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
            placeholder={undefined}
          >
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={3}
          />
        </div>

        <Button className="mt-6" fullWidth placeholder={undefined}>
          sign up
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal"
          placeholder={undefined}
        >
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
