import {ICommandHandler} from '../../../Shared/Domain/Bus/Command/ICommandHandler'
import {CreateVideoCommand} from '../../../Mooc/Videos/Application/CreateVideoCommand'
import {CreateVideo} from '../../Videos/Application/CreateVideo'

export class CreateVideoHandler implements ICommandHandler{
    constructor(private readonly videoCreator: CreateVideo){}

    invoke(command: CreateVideoCommand): void {
        this.videoCreator.create(command.getId(), command.getTitle(), command.getDuration())
    }
}