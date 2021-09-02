/**
 * @format
 * @flow
 */

import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import {
  Home,
  HomeFilled,
  info,
  infoFilled,
  plus,
  leftArrow,
  camera,
  location,
  weather,
} from '../assets/svg/mainSVG';

const IMAGES = {
  home: Home,
  homeFilled: HomeFilled,
  info: info,
  infoFilled: infoFilled,
  plus: plus,
  leftArrow: leftArrow,
  camera: camera,
  location: location,
  weather: weather,
};

export type IconsType = 'back';

/**
 * @param {string} icon Icon name
 * @param {number} height Height of Icon
 * @param {number} width Width of Icon
 * @param {string} color Icon Color
 */

type Props = {
  icon: IconsType,
  width?: number,
  height?: number,
  color?: string,
};

const SvgImage = (props: Props) => {
  const { icon, width = 25, height = 25, color = '#9b9b9b' } = props;
  const image = IMAGES[icon];
  if (!image) {
    throw new Error(
      `${icon} svg is not added in IMAGES JSON in path > svgIcons/index.js. Please insert icon`,
    );
  }
  return <SvgXml xml={image} width={width} height={height} fill={color} />;
};

export default SvgImage;
