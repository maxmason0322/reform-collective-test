const PRIMARY_COLOR = "#192227";
const SECONDARY_COLOR = "#F9A600";
const DETAIL_LIGHT_COLOR = "#FDFCFC";
const DETAIL_DARK_COLOR = "#4A5357";

export interface ColorPalette {
  primary: string;
  secondary: string;
  detailLight: string;
  detailDark: string;
}

export const colors: ColorPalette = {
  primary: PRIMARY_COLOR,
  secondary: SECONDARY_COLOR,
  detailLight: DETAIL_LIGHT_COLOR,
  detailDark: DETAIL_DARK_COLOR,
};
