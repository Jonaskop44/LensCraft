"use client";

import UserCards from "@/app/components/users/UserCards";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "@/app/components/users/Form";
import Successful from "@/app/components/Successful";

const Users = () => {
  const [users, setUsers] = useState<UserCards[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      await axios
        .get("/api/users")
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUsers();
  }, []);

  return (
    <div>
      {!isLoading && users.length > 0 && (
        <button
          onClick={() => setOpen(true)}
          className="p-2 bg-sky-500 rounded-lg text-white font-semibold hover:bg-sky-600 transition duration-200 ease-in-out"
        >
          Newsletter senden
        </button>
      )}
      <UserCards users={users} isLoading={isLoading} setUsers={setUsers} />
      <Form
        open={open}
        setOpen={setOpen}
        success={notification}
        setSuccess={setNotification}
      />
      <Successful
        show={notification}
        setShow={setNotification}
        text="Die Newsletter wurden erfolgreich versendet."
      />
    </div>
  );
};

export default Users;
