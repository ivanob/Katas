import fs = require('fs')
const readline = require('readline');

export class RequestCommandAsyncPooler {

    constructor(private readonly requestFileName: string){}

    private delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    public async poolingProcess(){
        console.log('Started async commnads pooling process...')
        while(1){
            fs.exists(this.requestFileName, (exists) => {
                if(exists){
                    var lineReader = require('readline').createInterface({
                        input: fs.createReadStream(this.requestFileName)
                    });
                    lineReader.on('line', function (line) {
                        console.log('Line from file:', line);  
                    });
                    fs.unlink(this.requestFileName, (err) => {
                    })
                }
            })
            await this.delay(1000);
            console.log('pooling')
        }
    }
}