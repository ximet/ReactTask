import { useContext, useMemo } from 'react';
import { themeContext } from 'context/themeContext';

export const useGraphSettings = () => {
  const { theme } = useContext(themeContext);

  const fontColor = useMemo(() => (theme === 'light' ? '#000000' : '#FFFFFF'), [theme]);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false
    },
    stacked: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        ticks: {
          color: fontColor,
          font: {
            weight: 'bold'
          }
        },
        title: {
          display: true,
          text: 'Temperature: °C',
          color: fontColor,
          font: {
            weight: 'bold',
            size: 22
          }
        }
      },
      x: {
        ticks: {
          color: fontColor,
          beginAtZero: true,
          font: {
            weight: 'bold'
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.3
      }
    }
  };

  return { options };
};
