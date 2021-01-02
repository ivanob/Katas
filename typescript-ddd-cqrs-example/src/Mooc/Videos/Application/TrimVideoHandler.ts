import {ICommandHandler} from '../../../Shared/Domain/Bus/Command/ICommandHandler'
import {TrimVideo} from '../../Videos/Application/TrimVideo'
import { TrimVideoCommand } from './TrimVideoCommand'

export class TrimVideoHandler implements ICommandHandler{
    constructor(private readonly videoTrimmer: TrimVideo){}

    invoke(command: TrimVideoCommand): void {
        this.videoTrimmer.trim(command.getId(), command.getNewDuration())
    }
}