import {Vehicle} from "../domain/model/vehicle.entity.js";

export class VehicleAssembler extends Vehicle {
    static toEntityFromResoruce(resource){
        return new VehicleAssembler({
            id: resource.id,
            title: resource.title,
            category: resource.category
        })
    }
    static toEntititesFromResponse(response){
        if(!response || !response.data || !response.data.products) return[];
            return response.data.products.map(resource => this.toEntityFromResoruce(resource));
        }
}