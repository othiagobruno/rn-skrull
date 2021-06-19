import * as React from 'react';
import {Animated, Easing, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  animating?: boolean;
  color?: string | undefined;
  size?: 'small' | 'large' | number;
  style?: StyleProp<ViewStyle>;
}

export const ActivityIndicator = ({
  animating = true,
  color: indicatorColor,
  size: indicatorSize = 'small',
  style,
  ...rest
}: Props) => {
  const {current: timer} = React.useRef<Animated.Value>(new Animated.Value(0));
  const {current: fade} = React.useRef<Animated.Value>(new Animated.Value(!animating ? 0 : 1));

  const rotation = React.useRef<Animated.CompositeAnimation | undefined>(undefined);
  const duration_rotation = 2000;

  const startRotation = React.useCallback(() => {
    Animated.timing(fade, {
      duration: 100,
      toValue: 1,
      isInteraction: false,
      useNativeDriver: true
    }).start();

    if (rotation.current) {
      timer.setValue(0);
      Animated.loop(rotation.current).start();
    }
  }, [fade, timer]);

  const stopRotation = () => {
    if (rotation.current) {
      rotation.current.stop();
    }
  };

  React.useEffect(() => {
    if (rotation.current === undefined) {
      rotation.current = Animated.timing(timer, {
        duration: duration_rotation,
        easing: Easing.linear,
        useNativeDriver: true,
        toValue: 1,
        isInteraction: false
      });
    }

    if (animating) {
      startRotation();
    } else {
      stopRotation();
    }
  }, [animating, fade, startRotation, timer]);

  const color = indicatorColor || 'white';
  const size =
    typeof indicatorSize === 'string' ? (indicatorSize === 'small' ? 20 : 30) : indicatorSize ? indicatorSize : 20;

  const frames = (60 * duration_rotation) / 1000;
  const easing = Easing.bezier(0.4, 0.0, 0.7, 1.0);
  const containerStyle = {
    width: size,
    height: size / 2,
    overflow: 'hidden' as const
  };

  return (
    <View style={[styles.container, style]} {...rest} accessible accessibilityRole="progressbar">
      <Animated.View style={[{width: size, height: size, opacity: fade}]} collapsable={false}>
        {[0, 1].map(index => {
          const inputRange = Array.from(new Array(frames), (_, frameIndex) => frameIndex / (frames - 1));
          const outputRange = Array.from(new Array(frames), (_, frameIndex) => {
            let progress = (2 * frameIndex) / (frames - 1);
            const rotation = index ? +(360 - 15) : -(180 - 15);
            if (progress > 1.0) {
              progress = 2.0 - progress;
            }
            const direction = index ? -1 : +1;
            return `${direction * (180 - 30) * easing(progress) + rotation}deg`;
          });

          const layerStyle = {
            width: size,
            height: size,
            transform: [
              {
                rotate: timer.interpolate({
                  inputRange: [0, 1],
                  outputRange: [`${0 + 30 + 15}deg`, `${2 * 360 + 30 + 15}deg`]
                })
              }
            ]
          };

          const viewportStyle = {
            width: size,
            height: size,
            transform: [
              {
                translateY: index ? -size / 2 : 0
              },
              {
                rotate: timer.interpolate({inputRange, outputRange})
              }
            ]
          };

          const offsetStyle = index ? {top: size / 2} : null;
          const stroke = {
            width: size,
            height: size,
            borderColor: color,
            borderWidth: size / 10,
            borderRadius: size / 2
          };

          return (
            <Animated.View key={index} style={[styles.layer]}>
              <Animated.View style={layerStyle}>
                <Animated.View style={[containerStyle, offsetStyle]} collapsable={false}>
                  <Animated.View style={viewportStyle}>
                    <Animated.View style={containerStyle} collapsable={false}>
                      <Animated.View style={stroke} />
                    </Animated.View>
                  </Animated.View>
                </Animated.View>
              </Animated.View>
            </Animated.View>
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  layer: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    alignItems: 'center'
  }
});
