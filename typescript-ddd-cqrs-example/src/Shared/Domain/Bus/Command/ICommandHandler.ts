
import { ICommand } from '../Command/ICommand'

export interface ICommandHandler {
    invoke(command: ICommand): void
}