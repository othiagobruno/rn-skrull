export const viewStyleConstants = {
  w: 'width',
  h: 'height',
  align: 'alignItems',
  justify: 'justifyContent',
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
  direction: 'flexDirection'
};

export interface IViewStyleConstants {
  w?: number;
  h?: number;
  direction?: 'row' | 'column';
  align?: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch';
  justify?: 'space-between' | 'flex-end' | 'flex-start' | 'center' | 'space-around' | 'space-evenly';
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
