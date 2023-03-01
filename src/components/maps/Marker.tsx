import { MarkerProps } from '@/types/map';
import { InfoWindowF, MarkerF } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import InfoContainer from './infos/InfoContainer';

const Marker = ({ name, location, line, panTo }: MarkerProps) => {
  const [isShown, toggleShown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    if (isShown) toggleShown(false);
    else {
      panTo(location);
      toggleShown(true);
    }
  }, [isShown]);

  return (
    <MarkerF position={location} onClick={handleToggle}>
      {isShown && (
        <InfoWindowF onCloseClick={handleToggle} options={{ minWidth: 150 }}>
          <InfoContainer line={line} name={name} />
        </InfoWindowF>
      )}
    </MarkerF>
  );
};

export default Marker;
