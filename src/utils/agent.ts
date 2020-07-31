import UAParser from 'ua-parser-js';

enum MoibleDeviceType {
  Mobile = 'mobile',
  Tabelt = 'tablet',
}

const parser = new UAParser();

export const setUA = (ua) => parser.setUA(ua);

export const isMobile = () =>
  Object.values(MoibleDeviceType).includes(parser.getDevice().type);
