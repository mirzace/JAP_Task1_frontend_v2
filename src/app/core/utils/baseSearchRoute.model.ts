import { BaseSearch } from "../models/baseSearch.model";

export const baseSearchRoute = (b: BaseSearch) => {
    let queryParams: string[] = [];

    if(b?.pageNumber) {
        queryParams.push(`PageNumber=${b.pageNumber}`);
    }
    
    if(b?.pageSize) {
        queryParams.push(`PageSize=${b.pageSize}`);
    }
    
    if(b?.sortBy) {
        queryParams.push(`SortBy=${b.sortBy}`);
    }
    
    if(b?.sortOrder) {
        queryParams.push(`SortOrder=${b.sortOrder}`);
    }
    
    return queryParams.join('&');
}