export const hexToRGBA = (hex: string, opacity: number): string => {
  // Remove the '#' character if present
  hex = hex.replace("#", "");

  // Parse the hex color components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Validate the opacity value
  if (opacity < 0 || opacity > 1) {
    throw new Error("Opacity must be a number between 0 and 1.");
  }

  // Construct the RGBA color string
  const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  return rgba;
};
