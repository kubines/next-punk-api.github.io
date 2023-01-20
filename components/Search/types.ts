export interface SearchProps {
  value?: string | number,
  onChange: (val: string) => void,
  onClear?: VoidFunction,
  className?: string,
}
