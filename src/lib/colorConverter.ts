import { Theme } from '@emotion/react';
import { theme } from 'twin.macro';

const colorConverter: { [key: string]: string } = {
  '1호선': theme`colors.subway.1`,
  '2호선': theme`colors.subway.2`,
  '3호선': theme`colors.subway.3`,
  '4호선': theme`colors.subway.4`,
  '5호선': theme`colors.subway.5`,
  '6호선': theme`colors.subway.6`,
  '7호선': theme`colors.subway.7`,
  '8호선': theme`colors.subway.8`,
};

export default colorConverter;
