import { Employee } from './IEmployee'

export interface Task {
    id?: number;
    title: string;
    description: string;
    deadline: string;
    progress: string;
    employer: number[]
}

export interface Pages{
    count: number;
    next: string | null;
    previous: string | null;
}