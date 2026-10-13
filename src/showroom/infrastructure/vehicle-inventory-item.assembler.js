/*
 * Assembler for converting vehicle inventory item resources to domain entities.
 */

export class VehicleInventoryItemAssembler {
    static toEntityFromResource(resource) {
        return {
            id: resource.id,
            name: resource.name,
            category: resource.category,
            price: resource.price,
            quantity: resource.quantity
        };
    }

    static toEntitiesFromResources(resources) {
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}