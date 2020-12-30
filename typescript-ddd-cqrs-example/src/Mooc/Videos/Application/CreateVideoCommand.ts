import {ICommand} from '../../../Shared/Domain/Bus/Command/ICommand' 
import { VideoId } from '../Domain/VideoId';
import { VideoTitle } from '../Domain/VideoTitle';
import { VideoDuration } from '../Domain/VideoDuration';
 
 export class CreateVideoCommand implements ICommand{
    constructor(private readonly id: VideoId, private readonly title: VideoTitle, private readonly duration: VideoDuration){}

    public getId(): VideoId{ return this.id }
    public getTitle(): VideoTitle{ return this.title }
    public getDuration(): VideoDuration{ return this.duration }
 }