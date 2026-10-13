<script setup>
import { ref, onMounted} from "vue";
import { usel18n } from "vue-i18n";
import { useToast } from "prime/vue/usetoast";
import { useRouter } from "vue-router";
import { useShowroomStore } from "@/showroom/presentation/store/showroom-store";
import { useVehicleStore} from "../../../vehicles/application/vehicle.store.js";
import { VehicleInventoryItem} from "../../domain/model/vehicle-inventory-item.entity.js";

const { t } = usel18n();
const toast = useToast();
const router = useRouter();
const showroomStore = useShowroomStore();
const vehicleStore = useVehicleStore();

const formData = ref ({
  sectionId:null,
  vehicleId:null,
  quantity:1,
})

onMounted(() => {
  showroomStore.fetchSections();
  vehicleStore.fetchVehicles();
});

const salveItem = async () => {
  const newItem = new VehicleInventoryItem(
    formData.value.sectionId,
    formData.value.vehicleId,
    formData.value.quantity
  );
};

</script>

<template>

</template>

<style scoped>

</style>