import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent = ({
  data
}: {
  data: {
    center: number[];
    zoom: number;
  };
}) => (
  <YMaps>
    <Map defaultState={data} height='100%' width='auto'>
      <Placemark geometry={data.center} />
    </Map>
  </YMaps>
);

export default MapComponent;
