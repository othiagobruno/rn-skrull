export const textStylesConstants = {
  align: 'textAlign',
  fs: 'fontSize',
  fw: 'fontWeight',
  lh: 'lineHeight',
  tt: 'textTransform',
  p: 'padding',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pt: 'paddingTop',
  m: 'margin',
  my: 'marginVertical',
  mx: 'marginHorizontal',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mb: 'marginBottom',
  bg: 'backgroundColor'
};

export interface ITextStylesConstants {
  fs?: number;
  fw?: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  lh?: number;
  bg?: string;
  tt?: 'capitalize' | 'lowercase' | 'uppercase' | 'none';
  align?: 'center' | 'justify' | 'left' | 'right';
  p?: number;
  px?: number;
  py?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  pt?: number;
  m?: number;
  my?: number;
  mx?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
}
