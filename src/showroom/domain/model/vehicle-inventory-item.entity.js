export class VehicleInventoryItem {
    constructor({
                    id = null,
                    sectionId = '',
                    vehicleCategoryId = '',
                    vehicleId = '',
                    vehicleName = '',
                    quantity = 0,
                    registeredAt = ''
                }) {
        this.id = id;
        this.sectionId = sectionId;
        this.vehicleCategoryId = vehicleCategoryId;
        this.vehicleId = vehicleId;
        this.vehicleName = vehicleName;
        this.quantity = quantity;
        this.registeredAt = registeredAt;
    }
}