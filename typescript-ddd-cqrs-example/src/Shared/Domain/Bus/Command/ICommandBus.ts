import { ICommand } from "./ICommand";

export interface ICommandBus {
    dispatch(command: ICommand): void
    handler(commandClass, commandHandler): void
}