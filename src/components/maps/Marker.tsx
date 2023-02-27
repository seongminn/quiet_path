import { Info } from '@/types/map';
import { InfoBoxF, MarkerF } from '@react-google-maps/api';
import { useState } from 'react';
import InfoBox from './InfoBox';

const Marker = ({ name, position, line, setLocation }: Info) => {
  const [isShown, toggleShown] = useState<boolean>(false);

  const handleToggle = () => {
    if (isShown) toggleShown(false);
    else {
      setLocation({ coordinates: position });
      toggleShown(true);
    }
  };

  return (
    <MarkerF position={position} key={name} onClick={handleToggle}>
      {isShown && (
        <InfoBoxF onCloseClick={handleToggle}>
          <InfoBox line={line} name={name} />
        </InfoBoxF>
      )}
    </MarkerF>
  );
};

export default Marker;
