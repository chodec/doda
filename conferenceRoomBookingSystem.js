class BookingSystem {
    constructor() {
        this.rooms = []
    }
    bookRoom(room, dateFrom, dateTo) {
        const d1 = new Date(dateFrom)
        const d2 = new Date(dateTo)
        const booking = {
            room: room,
            dateFrom: dateFrom,
            dateTo: dateTo
        }
        
        if (this.rooms.length < 1) {
            this.rooms.push(booking)
        } else {
            for (let i = 0; i < this.rooms.length; i++) {
                if (this.rooms[i].room === room) {
                    const existingD1 = new Date(this.rooms[i].dateFrom)
                    const existingD2 = new Date(this.rooms[i].dateTo)
                    if ((existingD1 <= d2 && existingD1 >= d1) || (existingD2 <= d2 && existingD2 >= d1) || (d1 <= existingD2 && d2 >= existingD1)) {
                        console.log(`${this.rooms[i].room} is already booked.`)
                        return
                    }
                }
            }
            this.rooms.push(booking)
        }
        console.log(this.rooms)
    }
    cancelBooking(room, dateFrom){
        const d1 = new Date(dateFrom)
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].room === room) {
                const existingD1 = new Date(this.rooms[i].dateFrom)
                if (+d1 === +existingD1) {
                    console.log(`${this.rooms[i]} canceled booking.`)
                    this.rooms.splice(i, 1)
                }
            }
        }
        console.log(this.rooms)
    }
}

const bookingSystem = new BookingSystem()
bookingSystem.bookRoom('Room A', '2024-07-01 10:00', '2024-07-01 12:00')
bookingSystem.bookRoom('Room A', '2024-07-01 11:00', '2024-07-01 12:00')
bookingSystem.bookRoom('Room A', '2024-07-01 13:00', '2024-07-01 14:00')
bookingSystem.cancelBooking('Room A', '2024-07-01 13:00')