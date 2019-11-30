import { Status } from './status.enum';
export class Task {
    public taskId: number;
    public name: string;
    public description: string;
    public storyId: number;
    public status: Status = Status.TODO;
}
