import { useEffect, useState } from "react";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

Chart.register(Tooltip, Title, ArcElement, Legend);

type Information = {
  id: number;
  address: string;
  city: string;
  country: string;
  region: string;
  createdAt: Date;
};

const DoughnutPie = () => {
  const [information, setInformation] = useState<Information[]>([]);

  useEffect(() => {
    const getInformation = async () => {
      await axios
        .get("/api/ip")
        .then((response) => {
          setInformation(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getInformation();
  }, []);

  const data = {
    labels: ["City", "Country", "Region"],
    datasets: [
      {
        label: information.map((info) => info.region) as any,
        data: information.map((info) => info.region.length),
        borderColor: "#1F2937",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
  };

  return (
    <div className="w-[50em] h-[200em] cursor-pointer">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutPie;
