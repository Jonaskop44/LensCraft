"use client";

import Image from "next/image";
import Picture from "@/public/images/BlackSky.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Successful from "@/app/components/Successful";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Warning from "@/app/components/Warning";

interface UserIDProps {
  params: { userID: string };
}

const UserID: React.FC<UserIDProps> = ({ params }) => {
  const router = useRouter();
  const [user, setUser] = useState<{
    id: string;
    email: string;
    active: boolean;
    createdAt: string;
    lastAction: string | null;
  }>();
  const [show, setShow] = useState(false);
  const [cooldown, setCooldown] = useState<boolean>(false);

  useEffect(() => {
    axios.get(`/api/status/${params.userID}`).then((response) => {
      setUser(response.data);
    });
  }, [params.userID]);

  const handleActive = () => {
    if (user && user.lastAction) {
      const lastActionTimestamp = new Date(user.lastAction).getTime();
      const currentTimestamp = new Date().getTime();
      const cooldownDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (currentTimestamp - lastActionTimestamp < cooldownDuration) {
        setCooldown(true);
        return;
      }
    }

    try {
      setCooldown(false);
      axios.post(`/api/status/${params.userID}`);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const name = user?.email.split("@")[0];

  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
      <Image
        src={Picture}
        alt="adw"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        {user ? (
          <>
            <h2 className="text-2xl font-bold sm:text-5xl">
              Newsletter von {name}
            </h2>
            <p className="py-5 text-xl">
              {user.active
                ? "Zum Kündigen der Newsletter klicken Sie auf den Button"
                : "Um die Newsletter kostenfrei zu abonnieren, klicken Sie auf den Button"}
            </p>
            <button
              onClick={handleActive}
              className={clsx(
                "px-8 py-3 border rounded-md",
                cooldown && "opacity-50 cursor-not-allowed"
              )}
            >
              {user.active ? "Kündigen" : "Abonnieren"}
            </button>
            <Successful
              show={show}
              setShow={setShow}
              text={
                user.active
                  ? "Sie haben die Newsletter erfolgreich gekündigt"
                  : "Sie haben die Newsletter erfolgreich abonniert"
              }
            />
            <Warning
              show={cooldown}
              setShow={setCooldown}
              text={
                cooldown
                  ? "Sie können nur alle 24 Stunden " +
                    (user.active ? "kündigen" : "abonnieren")
                  : "Jetzt " + (user.active ? "kündigen" : "abonnieren")
              }
            />
          </>
        ) : (
          <>
            <h2 className="text-5xl font-bold">Laden...</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default UserID;
