export class Track {
    constructor(
    public id: number,
    public title: string,
    public rating:number,
    public genres:[{
        id: number,
        name: string,
    }])
    {}
}
