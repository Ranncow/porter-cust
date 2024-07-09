/**
 * Create a test order on the back.
 */
// MODULE'S VARS
const NS = 'Porter_Cust_Shared_Web_Api_Order_Create';

// MODULE'S CLASSES
/**
 * @memberOf Porter_Cust_Shared_Web_Api_Order_Create
 */
class Request {
    static namespace = NS;
    /** @type {Porter_Base_Shared_Dto_Order.Dto} */
    entity;
}

/**
 * @memberOf Porter_Cust_Shared_Web_Api_Order_Create
 */
class Response {
    static namespace = NS;
    /** @type {Porter_Base_Shared_Dto_Order.Dto} */
    entity;
    /** @type {boolean} */
    success;
}

/**
 * @implements TeqFw_Web_Api_Shared_Api_Endpoint
 */
export default class Porter_Cust_Shared_Web_Api_Order_Create {
    /**
     * @param {TeqFw_Core_Shared_Util_Cast} cast
     * @param {Porter_Base_Shared_Dto_Order} dtoOrder
     */
    constructor(
        {
            TeqFw_Core_Shared_Util_Cast$: cast,
            Porter_Base_Shared_Dto_Order$: dtoOrder,
        }
    ) {
        // INSTANCE METHODS

        /**
         * @param {Porter_Cust_Shared_Web_Api_Order_Create.Request} [data]
         * @return {Porter_Cust_Shared_Web_Api_Order_Create.Request}
         */
        this.createReq = function (data) {
            // create new DTO
            const res = new Request();
            // cast known attributes
            res.entity = dtoOrder.createDto(data?.entity);
            return res;
        };

        /**
         * @param {Porter_Cust_Shared_Web_Api_Order_Create.Response} [data]
         * @returns {Porter_Cust_Shared_Web_Api_Order_Create.Response}
         */
        this.createRes = function (data) {
            // create new DTO
            const res = new Response();
            // cast known attributes
            res.entity = dtoOrder.createDto(data?.entity);
            res.success = cast.boolean(data?.success);
            return res;
        };
    }

}
