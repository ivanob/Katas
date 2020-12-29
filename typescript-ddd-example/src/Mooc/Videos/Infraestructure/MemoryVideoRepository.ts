import { IVideoRepository } from '../Domain/IVideoRepository';
import { Video } from '../Domain/Video';
import { VideoId } from '../Domain/VideoId';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryVideoRepository implements IVideoRepository{
    private memory: Video[];

    constructor(){
        this.memory = [];
    }

    createVideo(video: Video) {
        this.memory.push(video)
    }

    searchVideo(videoId: VideoId): Video {
        const videoFound = this.memory.find(v => v.id === videoId)
        if(!videoFound){
            throw new Error(`Video with ID: ${videoId} not found`)
        }
        return videoFound;
    }

}