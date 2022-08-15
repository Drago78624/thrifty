import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const url = "http://192.168.0.104:5000/register";
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const resp = await fetch(url, options);
    const r = await resp.json();
    console.log(r);
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, min: 5, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, min: 5, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true, min: 5 })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true, max: 64, min: 8 })}
        />
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", { required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
