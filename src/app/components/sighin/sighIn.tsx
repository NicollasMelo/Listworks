"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Login from "../loginForm/login";

export default function SighIn() {
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mb-8 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Entre ou registre uma nova conta
          </h2>
          <Login />
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-8 text-center text-sm text-gray-500">
            Não tem conta?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Registre sua conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
