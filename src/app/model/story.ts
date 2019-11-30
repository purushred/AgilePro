import { Status } from './status.enum';
export class Story {
    public storyId: BigInteger;
    public name: string;
    public description: string;
    public featureId: number;
    public status: Status = Status.TODO;
}
