import { prepareChartData } from './prepareData';

test('Function should return current structure for chart', () => {
  expect(
    prepareChartData([
      {
        time: '2020-03-16T14:00+01:00',
        temperature: 14
      },
      {
        time: '2020-03-16T15:00+01:00',
        temperature: 18
      }
    ])
  ).toStrictEqual([
    ['16:00', '17:00'],
    [14, 18]
  ]);
});
