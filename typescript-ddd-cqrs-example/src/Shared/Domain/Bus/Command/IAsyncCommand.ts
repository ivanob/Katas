import { ICommand } from "./ICommand";

export interface IAsyncCommand extends ICommand {
    serialize(): string
}