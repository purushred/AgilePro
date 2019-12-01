import { Status } from './status.enum';
export class Story {
    public storyId: number;
    public name: string;
    public description: string;
    public featureId: number;
    public estimation: number;
    public iteration: string;
    public owner: string;
    public team: string;
    public status: Status = Status.TODO;
}
