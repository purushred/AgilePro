import { Status } from './status.enum';
export class Project {
    public projectId: number;
    public name: string;
    public description: string;
    public userId: number;
    public status: Status;
}
