export class Meeting {

  constructor(
    public id: number,
    public startTime?: string,
    public endTime?: string,
    public date?: string,
    public title?: string,
    public desc?: string,
    public creator?: number
  ){ }
}
