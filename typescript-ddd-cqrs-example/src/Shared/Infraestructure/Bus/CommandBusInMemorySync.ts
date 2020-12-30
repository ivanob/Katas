import { ICommandBus } from "../../Domain/Bus/Command/ICommandBus";
import { ICommand } from "../../Domain/Bus/Command/ICommand";
import { ICommandHandler } from '../../../Shared/Domain/Bus/Command/ICommandHandler'

export class CommandBusInMemorySync implements ICommandBus {
    constructor(private readonly route: Map<string, ICommandHandler>){}

    dispatch(command: ICommand): void {
        const commandName: string = command.constructor.name
        this.route.get(commandName).invoke(command);
    }

    handler(commandClassName: string, commandHandler: any): void {
        this.route.set(commandClassName, commandHandler);
    }
    
}