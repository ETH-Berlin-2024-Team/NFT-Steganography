"use client";
import { Web3Button, useContract, useLazyMint } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInputs {
  name: string;
  description: string;
  receiverAddress: string;
  hiddenMessage: string;
}

export default function page() {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_NFTDROP_CONTRACT || ""
  );
  const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // This function is required by useForm but we'll handle submission with Web3Button
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-xs"
      >
        <label className="form-control w-full max-w-xs">
          <span className="label-text label">NFT Name</span>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="input w-full max-w-xs"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </label>

        <label className="form-control w-full max-w-xs">
          <span className="label-text label">NFT Description</span>
          <input
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
            className="input w-full max-w-xs"
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </label>

        <label className="form-control w-full max-w-xs">
          <span className="label-text label">Receiver Address</span>
          <input
            type="text"
            placeholder="Receiver Address"
            {...register("receiverAddress", { required: true })}
            className="input w-full max-w-xs"
          />
          {errors.receiverAddress && (
            <span className="text-red-500">Receiver Address is required</span>
          )}
        </label>

        <label className="form-control w-full max-w-xs">
          <span className="label-text label">Hidden Message</span>
          <input
            type="text"
            placeholder="Hidden Message"
            {...register("hiddenMessage", { required: false })}
            className="input w-full max-w-xs"
          />
          {errors.hiddenMessage && (
            <span className="text-red-500">Hidden Message is required</span>
          )}
        </label>

        <Web3Button
          contractAddress={process.env.NEXT_PUBLIC_NFTDROP_CONTRACT || ""}
          action={async () => {
            const data = watch();
            await lazyMint({
              metadatas: [
                {
                  name: data.name,
                  description: data.description,
                  image: `https://raw.githubusercontent.com/ETH-Berlin-2024-Team/NFT-Steganography/main/banana.webp`,
                },
              ],
              to: data.receiverAddress,
            });

            reset();
          }}
        >
          Lazy Mint NFT
        </Web3Button>
      </form>
    </div>
  );
}
