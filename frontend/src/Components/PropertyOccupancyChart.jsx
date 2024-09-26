import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components for Bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PropertyOccupancyBarChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch occupancy data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:9090/property/occupancy-stats"
        );
        const data = await response.json();

        // Prepare data for the chart
        const propertyNames = data.map((item) => item.propertyName);
        const availableUnits = data.map((item) => item.availableUnits);
        const occupiedUnits = data.map((item) => item.occupiedUnits);

        setChartData({
          labels: propertyNames,
          datasets: [
            {
              label: "Available Units",
              data: availableUnits,
              backgroundColor: "rgba(13, 202, 240, 0.9)",
              borderColor: "rgba(13, 202, 240, 1)",
              borderWidth: 1,
            },
            {
              label: "Occupied Units",
              data: occupiedUnits,
              backgroundColor: "rgba(255, 193, 7, 0.9)",
              borderColor: "rgba(255, 193, 7, 1)",
              borderWidth: 1,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching occupancy data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-96">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Property Occupancy Bar Chart",
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Properties",
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  // Ensure that only integers are shown on the y-axis
                  stepSize: 1,
                  callback: function (value) {
                    if (Number.isInteger(value)) {
                      return value; // Show only whole numbers
                    }
                  },
                },
                title: {
                  display: true,
                  text: "Units",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default PropertyOccupancyBarChart;
