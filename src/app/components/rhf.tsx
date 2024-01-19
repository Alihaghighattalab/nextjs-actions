"use client";

import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};
type DataType = {
  name: string;
  message: string;
};

export const Rhf: FC<Props> = ({}) => {
  const [data, setData] = useState<DataType>({
    name: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DataType>({
    defaultValues: {
      name: "",
      message: "",
    },
  });
  const processForm: SubmitHandler<DataType> = (data) => setData(data);
  return (
    <section className="flex gap-6">
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-1 flex-col gap-4 sm:w-1/2"
      >
        <input
          placeholder="name"
          className="rounded-lg bg-white p-2 border border-gray-400"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name?.message && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
        <input
          placeholder="message"
          className="rounded-lg bg-white p-2 border border-gray-400"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 4,
              message: "message must have at least 4 characters",
            },
          })}
        />
        {errors.message?.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
        <button className="rounded-lg bg-black text-white p-2">Submit</button>
      </form>
      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};
