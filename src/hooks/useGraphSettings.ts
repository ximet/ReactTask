import { useContext, useMemo } from 'react';
import { themeContext } from 'context/themeContext';
import { GraphOptionsType } from 'types/graphOptionsType';
import { BLACK_COLOR, WHITE_COLOR, GRAY_COLOR } from 'utils/colorsConstants';

export const useGraphSettings = (): {
  options: GraphOptionsType;
} => {
  const { theme } = useContext(themeContext);

  const fontColor: string = useMemo(() => (theme === 'light' ? BLACK_COLOR : WHITE_COLOR), [theme]);

  const options: GraphOptionsType = {
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
        beginAtZero: true,
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
        },
        grid: {
          color: function (context: { tick: { value: number } }) {
            if (context.tick.value !== 0) {
              return GRAY_COLOR;
            } else {
              return fontColor;
            }
          },
          lineWidth: function (context: { tick: { value: number } }) {
            if (context.tick.value !== 0) {
              return 1;
            } else {
              return 3;
            }
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
        },
        grid: {
          color: GRAY_COLOR
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
