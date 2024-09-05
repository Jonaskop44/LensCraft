"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Input from "@/app/components/login/Input";
import Button from "@/app/components/login/Button";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const session = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isBuyButtonDisabled = !password || !email || !email.includes("@");
    setIsLoading(isBuyButtonDisabled);
  }, [email, password]);

  useEffect(() => {
    if (session?.status === "authenticated") {
      setIsAuthenticated(true);
      router.push("/admin");
    }
  }, [session?.status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    setIsAuthenticated(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          setIsAuthenticated(false);
          toast.error("Falshes Passwort oder Email!");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Logged In!");
          setIsAuthenticated(true);
          router.push("/admin");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="h-full w-full fixed flex justify-center items-center bg-slate-100">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-gray-900 dark:text-darkText">
          Sign in to your account
        </h2>
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 dark:bg-secondaryDark">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              errors={errors}
              required
              id="email"
              label="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              register={register}
              errors={errors}
              required
              id="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <Button disabled={isLoading} fullWidth type="submit">
                {isAuthenticated ? "Loading..." : "Sign in"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
