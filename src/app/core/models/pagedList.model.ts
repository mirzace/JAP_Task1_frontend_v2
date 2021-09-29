export class PagedList<T> {
    items: T[];
    currentPage: number;
    pageSize: number;
    totalICount: number;
    totalPages: number;
}