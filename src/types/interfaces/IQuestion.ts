import { IAnswer } from "./IAnswer";

export interface IQuestion {
    question: string;
    answers: IAnswer[]
}