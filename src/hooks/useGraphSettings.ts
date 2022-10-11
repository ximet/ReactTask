import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from 'store/theme/themeSelector';
import { GraphOptionsType } from 'types/graphOptionsType';
import { BLACK_COLOR, WHITE_COLOR, GRAY_COLOR } from 'utils/colorsConstants';

export const useGraphSettings = (): {
  options: GraphOptionsType;
} => {
  const theme = useSelector(themeSelector);

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
            return context.tick.value ? GRAY_COLOR : fontColor;
          },
          lineWidth: function (context: { tick: { value: number } }) {
            return context.tick.value ? 1 : 3;
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
