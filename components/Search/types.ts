export interface SearchProps {
  value?: string,
  onChange: (val: string) => void,
  onClear?: VoidFunction,
  className?: string,
}
