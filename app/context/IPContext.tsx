"use client";

import axios from "axios";
import { FC, ReactNode, useEffect, useState } from "react";
import { Visitors } from "@/app/components/admin/LineChart";
import PrivacyPolicy from "../components/modals/PrivacyPolicy";

interface IPContextProps {
  children: ReactNode;
}

const IPContext: FC<IPContextProps> = ({ children }) => {
  const [visitors, setVisitors] = useState<Visitors[]>([]);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const updateVisitors = async () => {
    try {
      const response = await axios.get("/api/ip");
      setVisitors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkVisitors = () => {
      if (visitors && Array.isArray(visitors)) {
        visitors.forEach((visitor) => {
          if (isUpdated === false) {
            console.log(isUpdated);
            setIsUpdated(true);
            axios
              .patch("/api/ip")
              .then(() => {
                console.log("updated");
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            console.log("Visitor is already updated");
          }
        });
      }
    };

    if (!visitors || visitors.length === 0) {
      updateVisitors();
    } else {
      checkVisitors();
    }

    console.log(visitors);
  }, [visitors]);

  return (
    <div>
      <PrivacyPolicy />
      {children}
    </div>
  );
};

export default IPContext;
