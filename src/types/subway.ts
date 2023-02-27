export type SubwayCongestion = {
  연번: number;
  조사일자: string;
  호선: number;
  역번호: number;
  역명: string;
  구분: string;
  '5시30분': string;
  '6시00분': string;
  '6시30분': string;
  '7시00분': string;
  '7시30분': string;
  '8시00분': string;
  '8시30분': string;
  '9시00분': string;
  '9시30분': string;
  '10시00분': string;
  '10시30분': string;
  '11시00분': string;
  '11시30분': string;
  '12시00분': string;
  '12시30분': string;
  '13시00분': string;
  '13시30분': string;
  '14시00분': string;
  '14시30분': string;
  '15시00분': string;
  '15시30분': string;
  '16시00분': string;
  '16시30분': string;
  '17시00분': string;
  '17시30분': string;
  '18시00분': string;
  '18시30분': string;
  '19시00분': string;
  '19시30분': string;
  '20시00분': string;
  '20시30분': string;
  '21시00분': string;
  '21시30분': string;
  '22시00분': string;
  '22시30분': string;
  '23시00분': string;
  '23시30분': string;
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
