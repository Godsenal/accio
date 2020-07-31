import React from 'react';
import { DeviceSwitch } from '../components/common';

import PcHome from '../components/Home/Pc';
import MobileHome from '../components/Home/Mobile';

const Home = () => {
  return <DeviceSwitch Pc={PcHome} Mobile={MobileHome} />;
};

export default Home;
