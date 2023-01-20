export interface PaginationProps {
  currentPage: number,
  onPageChange: (value: number) => void,
  perPage: number,
  pagesCount?: number,
}
