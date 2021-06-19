import React, {createContext, useContext} from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../theme';
import type {ITheme} from '../types/theme.interface';
import merge from 'deepmerge';
import type {iThemeOverride} from '../types/theme.non.interface';
const ThemeContext = createContext<iThemeOverride>(DefaultTheme);

interface ThemeProvider {
  theme?: iThemeOverride;
}

export const ThemeProvider: React.FC<ThemeProvider> = ({children, theme}) => {
  const userTheme: ITheme = merge({...DefaultTheme}, {...theme}) as ITheme;

  return (
    <ThemeContext.Provider value={userTheme}>
      <View style={{flex: 1, backgroundColor: userTheme.colors.background}}>{children}</View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext<iThemeOverride>(ThemeContext);
  if (!context) {
    throw new Error('The context must be within a valid provider');
  }
  return context as ITheme;
};
