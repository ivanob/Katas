import { ICommand } from "../Command/ICommand";
import { IResponse } from "./IResponse";

export interface IQueryHandler {
    ask(command: ICommand): IResponse
}