import React from 'react';
import { isMobile } from '../../utils/agent';

const DeviceSwitch = ({ Pc, Mobile, props = {} }) => {
  const mobile = isMobile();

  return mobile ? <Mobile {...props} /> : <Pc {...props} />;
};

export default DeviceSwitch;
