export type GraphOptionsType = {
  responsive: boolean;
  interaction: {
    mode: 'index';
    intersect: boolean;
  };
  stacked: boolean;
  plugins: {
    legend: {
      display: boolean;
    };
  };
  scales: {
    y: {
      type: 'linear';
      display: boolean;
      position: 'left';
      beginAtZero: boolean;
      ticks: {
        color: string;
        font: {
          weight: string;
        };
      };
      title: {
        display: boolean;
        text: string;
        color: string;
        font: {
          weight: string;
          size: number;
        };
      };
      grid: {
        color: (context: { tick: { value: number } }) => string;
        lineWidth: (context: { tick: { value: number } }) => number;
      };
    };
    x: {
      ticks: {
        color: string;
        beginAtZero: boolean;
        font: {
          weight: string;
        };
      };
      grid: {
        color: string;
      };
    };
  };
  elements: {
    line: {
      tension: number;
    };
  };
};
