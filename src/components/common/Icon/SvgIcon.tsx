import { ReactComponent as BarsIcon } from '@/assets/icons/icon-bars.svg';
import { ReactComponent as MapIcon } from '@/assets/icons/icon-map.svg';
import { ReactComponent as PeopleIcon } from '@/assets/icons/icon-people.svg';
import { ReactComponent as MetroIcon } from '@/assets/icons/icon-metro.svg';
import { ReactNode } from 'react';

const SvgIcon: {
  [key: string]: (
    width: number,
    height: number,
    strokeWidth: number
  ) => ReactNode;
} = {
  bars: (width, height, strokeWidth) => (
    <BarsIcon width={width} height={height} strokeWidth={strokeWidth} />
  ),
  map: (width, height, strokeWidth) => (
    <MapIcon width={width} height={height} strokeWidth={strokeWidth} />
  ),
  people: (width, height, strokeWidth) => (
    <PeopleIcon width={width} height={height} strokeWidth={strokeWidth} />
  ),
  metro: (width, height, strokeWidth) => (
    <MetroIcon width={width} height={height} strokeWidth={strokeWidth} />
  ),
};

export default SvgIcon;
