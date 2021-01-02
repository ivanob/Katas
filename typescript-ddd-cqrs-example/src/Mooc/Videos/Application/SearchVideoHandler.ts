import {IQueryHandler} from '../../../Shared/Domain/Bus/Query/IQueryHandler'
import {SearchVideo} from '../../Videos/Application/SearchVideo'
import {GetVideoQuery} from '../../Videos/Application/GetVideoQuery'
import { IResponse } from '../../../Shared/Domain/Bus/Query/IResponse'

export class SearchVideoHandler implements IQueryHandler{
    constructor(private readonly searchVideo: SearchVideo){}

    ask(command: GetVideoQuery): IResponse {
        return this.searchVideo.search(command.getId())
    }
}