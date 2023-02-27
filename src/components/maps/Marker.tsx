import { Info } from '@/types/map';
import { InfoBoxF, MarkerF } from '@react-google-maps/api';
import { Fragment, useState } from 'react';
import InfoBox from './InfoBox';

const Marker = ({ name, position, line }: Info) => {
  const [isShown, toggleShown] = useState<boolean>(false);

  const handleToggle = () => {
    toggleShown((prev) => !prev);
  };

  return (
    <Fragment>
      <MarkerF position={position} key={name} onClick={handleToggle}>
        {isShown && (
          <InfoBoxF onCloseClick={handleToggle}>
            <InfoBox line={line} name={name} />
          </InfoBoxF>
        )}
      </MarkerF>
    </Fragment>
  );
};

export default Marker;
