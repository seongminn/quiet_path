import { Info } from '@/types/map';
import { InfoBoxF, MarkerF } from '@react-google-maps/api';
import { Fragment, useState } from 'react';

const Marker = ({ name, position }: Info) => {
  const [isShown, toggleShown] = useState<boolean>(false);

  const handleToggle = () => {
    toggleShown((prev) => !prev);
  };

  return (
    <Fragment>
      <MarkerF position={position} key={name} onClick={handleToggle}>
        {isShown && (
          <InfoBoxF onCloseClick={handleToggle}>
            <div>hi</div>
          </InfoBoxF>
        )}
      </MarkerF>
    </Fragment>
  );
};

export default Marker;
