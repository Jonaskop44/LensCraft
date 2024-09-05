"use client";

import LineChart from "@/app/components/admin/LineChart";
import DoughnutPie from "@/app/components/admin/Doughnut";

const Admin = () => {
  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        <li className="col-span-1">
          <LineChart />
        </li>
      </ul>
    </div>
  );
};

export default Admin;
