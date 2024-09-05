"use client";

import { MdDelete } from "react-icons/md";
import clsx from "clsx";
import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";

type UserCards = {
  email: string;
  active: boolean;
  id: string;
};

interface UserCardsProps {
  users: UserCards[];
  isLoading: boolean;
  setUsers: Dispatch<SetStateAction<UserCards[]>>;
}

const UserCards: FC<UserCardsProps> = ({ users, isLoading, setUsers }) => {
  const handleCopy = async (id: string) => {
    await axios
      .get(`/api/users/${id}`)
      .then((response) => {
        navigator.clipboard.writeText(response.data);
        toast.success("ID wurde kopiert");
      })
      .catch((error) => {
        toast.error("ID konnte nicht kopiert werden");
      });
  };

  const handleDelete = async (id: string, users: UserCards[]) => {
    await axios
      .delete(`/api/users/${id}`)
      .then((response) => {
        toast.success("Benutzer wurde gelöscht");
        setUsers(users);
      })
      .catch((error) => {
        toast.error("Benutzer konnte nicht gelöscht werden");
      });
  };

  const handleActive = async (id: string, users: UserCards[]) => {
    await axios
      .patch(`/api/users/${id}`)
      .then((response) => {
        toast.success("Abonnement wurde geändert");
        setUsers(users);
      })
      .catch((error) => {
        toast.error("Abonnement konnte nicht geändert werden");
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        {isLoading ? (
          <Image src="/gifs/loading.gif" alt="dw" width={30} height={30} />
        ) : users[0] ? (
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {users.map((user) => (
              <li
                key={user.email}
                className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate  cursor-default">
                        {user.email}
                      </h3>
                      <span
                        className={clsx(
                          user.active
                            ? "flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                            : "flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full"
                        )}
                      >
                        {user.active ? "Abonnent" : "Kein Abonnent"}
                      </span>
                    </div>
                    <p
                      onClick={() => handleCopy(user.id)}
                      className="mt-1 text-gray-500 text-sm truncate cursor-pointer"
                    >
                      Click to copy ID
                    </p>
                  </div>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <button
                        onClick={() => {
                          const updatedServers = users.filter(
                            (item) => item.id !== user.id
                          );
                          handleDelete(user.id, updatedServers);
                        }}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                        <MdDelete
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Löschen</span>
                      </button>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <button
                        onClick={() => {
                          const updatedUsers = users.map((item) => {
                            if (item.id === user.id) {
                              item.active = !item.active;
                            }
                            return item;
                          });
                          handleActive(user.id, updatedUsers);
                        }}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                      >
                        <AiOutlineEdit
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">
                          {user.active ? "Kündigen" : "Abonnieren"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Keine Benutzer gefunden</p>
        )}
      </div>
    </div>
  );
};

export default UserCards;
