import { render } from "@testing-library/react";
import { horizontalBar } from "react-chartjs-2";

const state = {
  labels: [
    "HTML/CSS",
    "Go",
    "SQL",
    "Java",
    "Python",
    "JavaScript",
    "C++",
    "PHP",
    "Bash",
    " ",
  ], // 'Java', 'Python', 'JavaScript', 'SQL', 'Go', 'C++', 'PHP', ' '],
  datasets: [
    {
      data: [10, 10, 9, 8, 7, 6, 5, 4, 4, 2], // 10,8, 7, 7, 8, 10, 4, 10],
      backgroundColor: "#EE7674",
      barThickness: 6,
    },
  ],
};

export default function CodeChart() {
  return (
    <div>
      <horizontalBar
        data={state}
        options={{
          legend: { display: false },
          scales: {
            xAxes: [
              {
                gridLines: { display: false },
                ticks: { display: false },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          plugins: {
            deferred: {
              yOffset: "100%",
              delay: 250,
            },
          },
        }}
      />
    </div>
  );
}
