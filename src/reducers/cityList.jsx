const initialState  = [
  {
    key: 0,
    city: "Minsk",
    weather: "+15",
  },
  {
    key: 1,
    city: "London",
    weather: "+23",
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
    weather: "+30",
  },
  {
    key: 3,
    city: "Moscow",
    weather: "+10",
  },
];;
  
export default function changeMainState(state = initialState, action) {
    return state;
}