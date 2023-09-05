import { currentPosition } from "../api/currentPosition";

export const useCurrentLocation = async () => {
    try {
      const location = await currentPosition();
      const lat = location.lat;
      const lon = location.lon;
      
      return { lat, lon };
    } catch (error) {
        console.error("Error al obtener la ubicación actual");
    }
}