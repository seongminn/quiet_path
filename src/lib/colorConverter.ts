import { Theme } from '@emotion/react';
import { theme } from 'twin.macro';

const colorConverter: { [key: string]: string } = {
  '1': theme`colors.subway.1`,
  '2': theme`colors.subway.2`,
  '3': theme`colors.subway.3`,
  '4': theme`colors.subway.4`,
  '5': theme`colors.subway.5`,
  '6': theme`colors.subway.6`,
  '7': theme`colors.subway.7`,
  '8': theme`colors.subway.8`,
};

export default colorConverter;
