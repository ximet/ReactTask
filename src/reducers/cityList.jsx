const initialState  = [
  {
    key: 0,
    city: "Minsk",
    weather: "+6",
  },
  {
    key: 1,
    city: "London",
    weather: "+12",
  },
  {
    key: 4,
    city: "Seoul",
    weather: "+18",
  },
  {
    key: 5,
    city: "Tokyo",
    weather: "+17",
  },
  {
    key: 6,
    city: "Istanbul",
    weather: "+25",
  },
  {
    key: 7,
    city: "Kuala Lumpur",
    weather: "+26",
  },
  {
    key: 8,
    city: "Singapore",
    weather: "+16",
  },
  {
    key: 9,
    city: "Dubai",
    weather: "+22",
  },
  {
    key: 2,
    city: "New York",
    weather: "+18",
  },
  {
    key: 3,
    city: "Moscow",
    weather: "-15",
  },
];;
  
export default function changeMainState(state = initialState, action) {
    return state;
}