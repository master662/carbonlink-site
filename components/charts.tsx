"use client"

import { Line, Bar, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

// Line Chart Component
export function LineChart() {
  const data: ChartData<"line"> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Carbon Offset (tCO₂e)",
        data: [65, 78, 90, 105, 120, 135, 150, 162, 170, 185, 195, 210],
        borderColor: "hsl(var(--chart-1))",
        backgroundColor: "hsl(var(--chart-1) / 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Target (tCO₂e)",
        data: [80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        borderColor: "hsl(var(--chart-2))",
        backgroundColor: "transparent",
        borderDashed: [5, 5],
        tension: 0.3,
        borderDash: [5, 5],
      },
    ],
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Carbon Offset (tCO₂e)",
        },
      },
    },
  }

  return <Line data={data} options={options} height={300} />
}

// Bar Chart Component
export function BarChart() {
  const data: ChartData<"bar"> = {
    labels: ["Amazon Conservation", "Wind Farm", "Methane Capture", "Reforestation", "Solar Power"],
    datasets: [
      {
        label: "Carbon Offset (tCO₂e)",
        data: [350, 275, 220, 180, 150],
        backgroundColor: [
          "hsl(var(--chart-1) / 0.8)",
          "hsl(var(--chart-2) / 0.8)",
          "hsl(var(--chart-3) / 0.8)",
          "hsl(var(--chart-4) / 0.8)",
          "hsl(var(--chart-5) / 0.8)",
        ],
      },
    ],
  }

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Carbon Offset (tCO₂e)",
        },
      },
    },
  }

  return <Bar data={data} options={options} height={300} />
}

// Pie Chart Component
export function PieChart() {
  const data: ChartData<"pie"> = {
    labels: ["Forestry & Conservation", "Renewable Energy", "Methane Capture", "Energy Efficiency", "Other"],
    datasets: [
      {
        data: [45, 25, 15, 10, 5],
        backgroundColor: [
          "hsl(var(--chart-1) / 0.8)",
          "hsl(var(--chart-2) / 0.8)",
          "hsl(var(--chart-3) / 0.8)",
          "hsl(var(--chart-4) / 0.8)",
          "hsl(var(--chart-5) / 0.8)",
        ],
        borderColor: [
          "hsl(var(--chart-1))",
          "hsl(var(--chart-2))",
          "hsl(var(--chart-3))",
          "hsl(var(--chart-4))",
          "hsl(var(--chart-5))",
        ],
        borderWidth: 1,
      },
    ],
  }

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  }

  return <Pie data={data} options={options} height={300} />
}
