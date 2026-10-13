import {ShowroomSection} from "../domain/model/showroom-section.entity.js";

export class ShowroomSectionAssembler {
    static toEntityFromResource(resource) {
        return new ShowroomSection(resource);
    }

    static toEntitiesFromResources(resources) {
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}