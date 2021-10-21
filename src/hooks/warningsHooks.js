import { useState, useEffect } from 'react';
import RequestController from '../controllers/RequestController';

export function useLocationWarnings(locationId) {
  const [warnings, setWarnings] = useState([]);

  useEffect(async () => {
    try {
      const warnings = await RequestController.getWarnings(locationId);
      setWarnings(warnings);
    } catch (error) {
      console.error(error);
    }
  }, [locationId]);

  return [warnings];
}
