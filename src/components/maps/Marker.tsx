import { Info } from '@/types/map';
import { InfoWindowF, MarkerF } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import InfoBox from './InfoBox';

const Marker = ({ name, location, line, panTo }: Info) => {
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
        <InfoWindowF>
          <InfoBox line={line} name={name} />
        </InfoWindowF>
      )}
    </MarkerF>
  );
};

export default Marker;
