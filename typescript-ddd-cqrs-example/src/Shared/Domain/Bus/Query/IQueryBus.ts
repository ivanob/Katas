import { IQuery } from "./IQuery";
import { IResponse } from './IResponse';

export interface IQueryBus {
    dispatch(command: IQuery): IResponse
    handler(commandClassName: string, commandHandler: any): void
}