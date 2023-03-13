import { MarkerProps } from '@/types/map';
import { InfoWindowF, MarkerF } from '@react-google-maps/api';
import { useState } from 'react';
import { InfoContainer } from './infos';

const Marker = ({ name, location, panTo }: MarkerProps) => {
  const [isShown, toggleShown] = useState<boolean>(false);

  const handleToggle = () => {
    if (isShown) toggleShown(false);
    else {
      toggleShown(true);
      panTo(location);
    }
  };

  return (
    <MarkerF
      position={{ lat: location.lat, lng: location.lng }}
      onClick={handleToggle}
    >
      {isShown && (
        <InfoWindowF onCloseClick={handleToggle} options={{ minWidth: 150 }}>
          <InfoContainer name={name} />
        </InfoWindowF>
      )}
    </MarkerF>
  );
};

export default Marker;
