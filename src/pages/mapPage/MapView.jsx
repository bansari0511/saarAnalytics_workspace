import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function MapViewComponent({ closeMap }) {
  const mapRef = useRef(null);

  useEffect(() => {
    let view;

    if (mapRef.current) {
      const map = new Map({
        basemap: "streets-navigation-vector",
      });

      view = new MapView({
        container: mapRef.current,
        map,
        center: [77.2090, 28.6139],
        zoom: 3,
      });
    }

    return () => {
      if (view) {
        view.container = null;
        view.destroy();
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen relative">
      <div ref={mapRef} style={{ height: "100vh", width: "100vw" }} />
      <button
        type="button"  
        onClick={closeMap}
        className="absolute top-4 left-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
      >
        Back
      </button>
    </div>
  );
}

export default MapViewComponent;
