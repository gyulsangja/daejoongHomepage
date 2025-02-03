export interface Menu {
    id: number;
    name: string;
    addr: string; 
    subMenu?: Menu[]; 
}