import React from 'react';
import {GestureResponderEvent, Pressable, StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import {useTheme} from '../../theme/provider';
import Icon from '../Icons';
import {useStyles} from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  variant?: 'outline' | 'solid' | 'default';
  icon?: React.ReactElement | string;
  color?: string | undefined;
  badge?: number;
  onPress?: (event: GestureResponderEvent) => void;
  badgeStyle?: ViewStyle;
  badgeTextStyle?: TextStyle;
  iconColor?: string;
}

const IconButton: React.FC<Props> = ({
  style,
  badge = 0,
  onPress = () => {},
  variant = 'default',
  icon = null,
  badgeStyle,
  badgeTextStyle,
  iconColor
}) => {
  const styles = useStyles();
  const {colors} = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        styles[variant],
        pressed && variant === 'solid' && styles.pressed,
        pressed && variant !== 'solid' && styles.pressed_opacity,
        style
      ]}
    >
      <View>
        {!!badge && (
          <View style={[styles.badge, badgeStyle]}>
            <Text style={[styles.badge_label, badgeTextStyle]}>{!!badge && badge > 9 ? '9+' : badge}</Text>
          </View>
        )}
        {typeof icon == 'string' ? (
          <Icon name={icon ?? 'user'} color={iconColor ?? (variant === 'solid' ? 'white' : colors.primary)} />
        ) : (
          icon
        )}
      </View>
    </Pressable>
  );
};

export default IconButton;
