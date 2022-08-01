export interface CityConfig {
  name: string;
  country: string;
  id: string;
}

const cities: CityConfig[] = [
  { name: 'Vilnius', country: 'Lithuania', id: '100593116' },
  { name: 'Minneapolis', country: 'USA', id: '105037649' },
  { name: 'Minsk', country: 'Belarus', id: '100625144' },
  { name: 'Bucharest', country: 'Romania', id: '100683506' },
  { name: 'Sofia', country: 'Bulgaria', id: '100727011' },
  { name: 'Lviv', country: 'Ukraine', id: '100702550' },
  { name: 'Chișinău', country: 'Moldova', id: '100618426' },
  { name: 'Wroclav', country: 'Poland', id: '103081368' }
];

export default cities;