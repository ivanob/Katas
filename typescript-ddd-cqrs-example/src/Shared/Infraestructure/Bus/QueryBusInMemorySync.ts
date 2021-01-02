import { IQueryBus } from "../../Domain/Bus/Query/IQueryBus";
import { IQuery } from "../../Domain/Bus/Query/IQuery";
import { IQueryHandler } from '../../../Shared/Domain/Bus/Query/IQueryHandler'
import { IResponse } from "../../Domain/Bus/Query/IResponse";

export class QueryBusInMemorySync implements IQueryBus {
    constructor(private readonly route: Map<string, IQueryHandler>){}

    dispatch(command: IQuery): IResponse {
        const commandName: string = command.constructor.name
        return this.route.get(commandName).ask(command);
    }

    handler(commandClassName: string, commandHandler: any): void {
        this.route.set(commandClassName, commandHandler);
    }
    
}