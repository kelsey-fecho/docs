import { FunctionComponent } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';

library.add(fab, fas);

interface IconProps {
  name: IconName;
  relativeSize?: FontAwesomeIconProps['size'];
  fontSize?: number;
  color?: string;
}

const Icon: FunctionComponent<IconProps> = ({
  name,
  relativeSize,
  color,
  fontSize,
}) => (
  <FontAwesomeIcon
    icon={name}
    size={relativeSize || '1x'}
    fontSize={fontSize}
    color={color || 'black'}
  />
);

export default Icon;