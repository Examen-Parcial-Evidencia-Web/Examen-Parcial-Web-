/**
 * Reusable endpoint client with CRUD operations over a resource collection.
 *
 * @class BaseEndpoint
 */

export class BaseEndpoint {
    constructor(baseApi,endpointPath) {
        this.baseApi = baseApi;
        this.endpointPath = endpointPath;
    }
}