import * as Icons from '@/assets/icons';
import { SVGProps } from 'react';

export type IconName = keyof typeof Icons;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

export default function Icon({
  name,
  fill = '#000000',
  stroke,
  width = 24,
  height = 24,
  ...rest
}: IconProps) {
  const IconSvg = Icons[name];
  return (
    <IconSvg
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
      {...rest}
    />
  );
}
