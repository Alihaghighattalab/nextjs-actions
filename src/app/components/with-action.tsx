"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { FormDataSchema } from "../../../lib/schema";
import { addEntry } from "../_actions";

type Props = {};
type DataType = z.infer<typeof FormDataSchema>;

export const WithAction: FC<Props> = ({}) => {
  const [data, setData] = useState<DataType>({
    name: "",
    message: "",
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>({ resolver: zodResolver(FormDataSchema) });
  const processForm: SubmitHandler<DataType> = async (data) => {
    const result = await addEntry(data);

    if (!result) return;
    if (result.error) return;
    reset();
    setData(data);
  };
  return (
    <section className="flex gap-6">
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-1 flex-col gap-4 sm:2-1/2"
      >
        <input
          className="bg-white rounded-lg border border-gray-400 p-2"
          {...register("name")}
          placeholder="name"
        />
        {errors.name?.message && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
        <input
          className="bg-white rounded-lg border border-gray-400 p-2"
          {...register("message")}
          placeholder="message"
        />
        {errors.message?.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
        <button className="bg-black p-2 text-white rounded-lg">Submit</button>
      </form>
      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};
