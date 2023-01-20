export const cutString = (value?: string) => {
  if (value) {
    return value.length > 140 ? `${value.substring(137)}...` : value;
  }
};
