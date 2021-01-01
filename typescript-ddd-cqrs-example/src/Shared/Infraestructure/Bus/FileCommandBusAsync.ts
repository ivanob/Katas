import { ICommandBus } from "../../Domain/Bus/Command/ICommandBus";
import { IAsyncCommand } from "src/Shared/Domain/Bus/Command/IAsyncCommand";
import fs = require('fs')

export class FileCommandBusAsync implements ICommandBus {
    constructor(private readonly filename: string){}

    dispatch(command: IAsyncCommand): void {
        fs.createWriteStream(this.filename, {flags: 'a'}) //append
        fs.appendFileSync(this.filename, command.serialize()+"\n");
    }

    handler(commandClassName: string, commandHandler: any): void {}
    
}