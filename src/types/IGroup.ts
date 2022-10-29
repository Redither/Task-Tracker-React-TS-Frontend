import { Employee } from './IEmployee';
export interface Group{
    id?: number;
    group_name: string;
    leader: number[]
    task: number[]
}