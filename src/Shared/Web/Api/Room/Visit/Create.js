/**
 * Read one registration permit entity.
 */
// MODULE'S VARS
const NS = 'Porter_Cust_Shared_Web_Api_Room_Visit_Create';

// MODULE'S CLASSES
/**
 * @memberOf Porter_Cust_Shared_Web_Api_Room_Visit_Create
 */
class Request {
    static namespace = NS;
    /**
     * The UUID for a current front.
     * @type {string}
     */
    frontUuid;
    /**
     * The UUID for a registration permit related to the visit.
     * @type {string}
     */
    permitUuid;
}

/**
 * @memberOf Porter_Cust_Shared_Web_Api_Room_Visit_Create
 */
class Response {
    static namespace = NS;
    /**
     * @type {Porter_Cust_Shared_Dto_Room_Visit.Dto}
     */
    entity;
    /**
     * @type {boolean}
     */
    success;
}

/**
 * @implements TeqFw_Web_Api_Shared_Api_Endpoint
 */
export default class Porter_Cust_Shared_Web_Api_Room_Visit_Create {
    /**
     * @param {TeqFw_Core_Shared_Util_Cast} cast
     * @param {Porter_Cust_Shared_Dto_Room_Visit} dtoEntity
     */
    constructor(
        {
            TeqFw_Core_Shared_Util_Cast$: cast,
            Porter_Cust_Shared_Dto_Room_Visit$: dtoEntity,
        }
    ) {
        // INSTANCE METHODS

        /**
         * @param {Porter_Cust_Shared_Web_Api_Room_Visit_Create.Request} [data]
         * @return {Porter_Cust_Shared_Web_Api_Room_Visit_Create.Request}
         */
        this.createReq = function (data) {
            // create new DTO
            const res = new Request();
            // cast known attributes
            res.frontUuid = cast.string(data?.frontUuid);
            res.permitUuid = cast.string(data?.permitUuid);
            return res;
        };

        /**
         * @param {Porter_Cust_Shared_Web_Api_Room_Visit_Create.Response} [data]
         * @returns {Porter_Cust_Shared_Web_Api_Room_Visit_Create.Response}
         */
        this.createRes = function (data) {
            // create new DTO
            const res = new Response();
            // cast known attributes
            res.entity = dtoEntity.createDto(data?.entity);
            res.success = cast.boolean(data?.success);
            return res;
        };
    }

}
