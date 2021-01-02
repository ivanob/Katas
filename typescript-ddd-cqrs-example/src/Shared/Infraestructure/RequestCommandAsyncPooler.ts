const readline = require('readline');
import fs = require('fs')
import { TrimVideoCommand } from '../../Mooc/Videos/Application/TrimVideoCommand'
import { ICommandHandler } from '../../Shared/Domain/Bus/Command/ICommandHandler'

export class RequestCommandAsyncPooler {
    constructor(private readonly requestFileName: string, private readonly modifyDurationHandler: ICommandHandler){}

    private delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    private unserializeCommand(line: string): TrimVideoCommand {
        const chunks = line.split(';')
        const newDuration: number = +chunks[2]
        return new TrimVideoCommand(chunks[1], newDuration)
    }

    public async poolingProcess(){
        console.log('Started async commnads pooling process...')
        const self = this;
        while(1){
            fs.exists(this.requestFileName, (exists) => {
                if(exists){
                    var lineReader = readline.createInterface({
                        input: fs.createReadStream(this.requestFileName)
                    });
                    lineReader.on('line', function (line: string) {
                        console.log('Command from file:', line);
                        if(line.length > 3){
                            const cmdAsync: TrimVideoCommand = self.unserializeCommand(line);
                            self.modifyDurationHandler.invoke(cmdAsync)
                        }
                    });
                    fs.unlink(this.requestFileName, (err) => {
                    })
                }
            })
            await this.delay(1000);
        }
    }
}