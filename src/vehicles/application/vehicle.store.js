import {defineStore} from 'pinia';
import {ref} from 'vue';
import {VehicleAPI} from "../infrastructure/vehicle-api.js";
import {VehicleAssembler} from "../infrastructure/vehicle-assembler.js";

const api = new VehicleAPI();
export const useVehicleStore = defineStore('vehicle', () => {
    const vehicles = ref([]);
    const errors = ref([]);

    function fetchVehicles() {
        api.getVehicles()
            .then(response => {
                vehicles.value = response.data.map(vehicle => VehicleAssembler.toDomain(vehicle));
            })
            .catch(error => {
                errors.value = [error.message];
            });
    }

    return {
        vehicles,
        errors,
        fetchVehicles
    };
});