import {IQuery} from '../../../Shared/Domain/Bus/Query/IQuery'
import {VideoId} from '../../../Mooc/Videos/Domain/VideoId'

export class GetVideoQuery implements IQuery{
    constructor(private readonly id: VideoId){}

    getId(): VideoId {return this.id}
}