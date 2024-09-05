"use client";

import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import axios from "axios";
import { useEffect, useState } from "react";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

export type Visitors = {
  id: number;
  address: string;
  views: number;
  city: string;
  country: string;
  region: string;
  createdAt: Date;
  updatedAt: Date;
};

const LineChart = () => {
  const [visitors, setVisitors] = useState<Visitors[]>([]);

  useEffect(() => {
    const getVisitors = async () => {
      await axios
        .get("/api/ip")
        .then((response) => {
          setVisitors(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getVisitors();
  }, []);

  const generateDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    return days;
  };

  const days = generateDays();

  // Get the current month and minute
  const currentMonth = new Date().getMonth();

  // Set days in the array of objects
  const visitorCount = days.map((day) => {
    let amount = 0;
    visitors.map((visitor) => {
      const createdAt = new Date(visitor.updatedAt);
      if (
        createdAt.getDate() === day &&
        createdAt.getMonth() === currentMonth
      ) {
        amount += visitor.views;
      }
    });
    return { day, amount };
  });

  const totalVisitorCount = () => {
    let amount = 0;
    visitors.map((visitor) => {
      const updatedAt = new Date(visitor.updatedAt);
      if (updatedAt.getMonth() === currentMonth) {
        amount += visitor.views;
      }
    });
    return amount;
  };

  const data = {
    labels: visitorCount.map((data) => data.day),
    datasets: [
      {
        label: "Besucher",
        data: visitorCount.map((data) => data.amount),
        borderColor: "#1F2937",
        pointBorderColor: "#133D7590",
        fill: false,
        backgroundColor: "#133D7590",
        pointStyle: "circle",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
          stepSize: 1,
        },
        title: {
          display: true,
          text: "Besucher",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic" as const,
            family: "Arial",
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Tag",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic" as const,
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="cursor-pointer w-[20em] h-[10em] md:w-[30em] md:h-[50em] lg:w-[70em] lg:h-[300em]">
        <Line data={data} options={options} />
        <h1>
          In den letzten 30 Tagen wurde die Seite {totalVisitorCount()}-mal
          besucht.
        </h1>
      </div>
    </div>
  );
};

export default LineChart;
