import { Info } from '@/types/map';
import { InfoBoxF, MarkerF } from '@react-google-maps/api';
import { useState } from 'react';
import InfoBox from './InfoBox';

const Marker = ({ name, location, line, panTo }: Info) => {
  const [isShown, toggleShown] = useState<boolean>(false);

  const handleToggle = () => {
    if (isShown) toggleShown(false);
    else {
      panTo(location);
      toggleShown(true);
    }
  };

  return (
    <MarkerF position={location} onClick={handleToggle}>
      {isShown && (
        <InfoBoxF onCloseClick={handleToggle}>
          <InfoBox line={line} name={name} />
        </InfoBoxF>
      )}
    </MarkerF>
  );
};

export default Marker;
