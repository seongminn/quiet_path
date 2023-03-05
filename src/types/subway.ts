export const Clocks = [
  '5시30분',
  '6시00분',
  '6시30분',
  '7시00분',
  '7시30분',
  '8시00분',
  '8시30분',
  '9시00분',
  '9시30분',
  '10시00분',
  '10시30분',
  '11시00분',
  '11시30분',
  '12시00분',
  '12시30분',
  '13시00분',
  '13시30분',
  '14시00분',
  '14시30분',
  '15시00분',
  '15시30분',
  '16시00분',
  '16시30분',
  '17시00분',
  '17시30분',
  '18시00분',
  '18시30분',
  '19시00분',
  '19시30분',
  '20시00분',
  '20시30분',
  '21시00분',
  '21시30분',
  '22시00분',
  '22시30분',
  '23시00분',
  '23시30분',
];

type ClocksType = typeof Clocks[number];

export type SubwayCongestion = {
  연번: number;
  조사일자: string;
  호선: number;
  역번호: number;
  역명: string;
  구분: string;
} & {
  [key in ClocksType as string]: string;
};

export type ResponseProps = {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  data: SubwayCongestion[];
};

export type InvestigatedDate = '평일' | '토요일' | '일요일';

export type RequestProps = {
  line: number;
  investigatedDate?: InvestigatedDate;
};

export type SubwayLocation = {
  name: string;
  location: { lat: number; lng: number };
};

export type InfoProps = {
  classification: string;
  congestion: number;
};
