import React from 'react';
import type {BoxProps} from '../../types/types';
import {useTheme} from '../../theme/provider';
import Box from '../Box';
import IconButton from '../IconButton';
import Icon from '../Icons';
import Text from '../Text';

interface TagProps extends BoxProps {
  label: string;
  labelColor: string;
  bg: string;
  onPress?: () => void;
  iconName?: string;
}

const Tag: React.FC<TagProps> = ({label, labelColor, onPress, iconName, bg, ...rest}) => {
  const {colors} = useTheme();
  return (
    <Box direction="row">
      <Box
        bg={bg ?? colors.tag}
        mr={10}
        mb={10}
        direction="row"
        py={4}
        px={12}
        align="center"
        borderRadius={20}
        {...rest}
      >
        <Text color={labelColor ?? '#505255'}>{label}</Text>
        {onPress && (
          <IconButton
            onPress={onPress}
            style={{width: 30, height: 30, padding: 0}}
            icon={<Icon color="#505255" name={iconName ?? 'x'} />}
          />
        )}
      </Box>
    </Box>
  );
};

export default Tag;
