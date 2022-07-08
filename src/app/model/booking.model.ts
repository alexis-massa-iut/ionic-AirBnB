export class Booking {
    constructor(
        public id: string,
        public placeId: string,
        public firstName: string,
        public lastName: string,
        public guestNumber: number,
        public startDate: Date,
        public endDate: Date,
        public personal?: boolean
    ) { }
}