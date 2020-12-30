import { ICommand } from "./ICommand";

export interface ICommandBus {
    dispatch(command: ICommand): void
}