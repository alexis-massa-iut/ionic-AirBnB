export class Booking {
    constructor(
        public id: string,
        public placeId: string,
        public userId: string,
        public guestNumber: number,
        public startDate: string,
        public endDate: string,
    ) { }
}