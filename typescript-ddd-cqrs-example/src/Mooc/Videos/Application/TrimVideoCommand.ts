import { VideoId } from '../Domain/VideoId';
import { VideoDuration } from '../Domain/VideoDuration';
import { IAsyncCommand } from 'src/Shared/Domain/Bus/Command/IAsyncCommand';
 
 export class TrimVideoCommand implements IAsyncCommand{
    constructor(private readonly id: VideoId, private readonly newDuration: VideoDuration){}

    public getId(): VideoId{ return this.id }
    public getNewDuration(): VideoDuration{ return this.newDuration }
    public serialize(): string {
        return `${TrimVideoCommand.name};${this.getId()};${this.getNewDuration()}`
    }
 }