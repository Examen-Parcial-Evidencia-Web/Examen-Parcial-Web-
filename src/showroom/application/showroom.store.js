import { defineStore } from "pinia";
import { ref } from "vue";
import { ShowroomApi } from "../infrastructure/showroom-api.js";
import { ShowroomSectionAssembler } from "../infrastructure/showroom-section.assembler.js";
import { VehicleInventoryItemAssembler } from "../infrastructure/vehicle-inventory-item.assembler.js";

const api = new ShowroomApi();

/**
 * @summary Store for managing showroom sections and inventory state.
 * @author John Doe
 */
export const useShowroomStore = defineStore('showroom', () => {
    const sections = ref([]);
    const errors = ref([]);

    function fetchSections() {
        api.getSections()
            .then(response => {
                sections.value = ShowroomSectionAssembler.toEntitiesFromResponse(response);
            })
            .catch(error => {
                errors.value.push(error);
            });
    }

    function addInventoryItem(itemEntity) {
        const resource = VehicleInventoryItemAssembler.toResourceFromEntity(itemEntity);
        return api.createInventoryItem(resource)
            .catch(error => {
                errors.value.push(error);
                throw error;
            });
    }

    return { sections, errors, fetchSections, addInventoryItem };
});