import Chart from "react-apexcharts";

const options = {
    labels: ["Income", "Expense", "Food", "Education", "Entertainment"],
    colors: ["#213ebf", "#FD5E53", "#34C759", "#FFC107", "#9B59B6"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#213ebf", "#FD5E53", "#34C759", "#FFC107", "#9B59B6"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
  };


function TransactionChart({income = 1000, expense = 100}){

    return(
        <Chart
        options={options}
        series={[income, expense]} 
        type="pie"
        width={"100%"}
        height={"100%"}
        />
    );
}

export default TransactionChart;