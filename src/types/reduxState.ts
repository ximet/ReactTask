export interface WeatherReduxState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
