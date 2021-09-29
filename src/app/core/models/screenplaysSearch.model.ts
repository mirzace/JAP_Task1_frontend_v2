import { BaseSearch } from "./baseSearch.model";

export class ScreenplaysSearch extends BaseSearch {
    search = "";
    category = 'movie';

    /**
     *
     */
    constructor() {
        super();
        this.pageNumber = 1;
        this.pageSize = 10;
    }
}