export class Autocomplete {
    
    public static autocomplete(search: string, items: string[] | any, maxResult: number): string[] {
        return items.filter((f) => f.toLowerCase().includes(search.toLowerCase())).slice(0, maxResult);
    }
}