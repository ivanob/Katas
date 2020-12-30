import {IQueryHandler} from '../../../Shared/Domain/Bus/Query/IQueryHandler'
import {CreateVideoCommand} from '../../../Mooc/Videos/Application/CreateVideoCommand'
import { IResponse } from '../../../../src/Shared/Domain/Bus/Query/IResponse'
import { SearchVideo } from './SearchVideo'

export class GetVideoHandler implements IQueryHandler{
    constructor(private readonly searchVideo: SearchVideo){}

    invoke(command: CreateVideoCommand): IResponse {
        return this.searchVideo.search(command.getId());
    }
}