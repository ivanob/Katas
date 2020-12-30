import { ICommand } from "../Command/ICommand";
import { IResponse } from "./IResponse";

export interface IQueryHandler {
    invoke(command: ICommand): IResponse
}