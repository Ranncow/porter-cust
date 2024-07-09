/**
 * The model to encapsulate functionality related to the order.
 *
 */
export default class Porter_Cust_Front_Mod_Order {
    /**
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {Porter_Base_Front_Util_Func} func
     * @param {TeqFw_Web_Api_Front_Web_Connect} api
     * @param {Porter_Cust_Shared_Web_Api_Order_Create} endCreate
     * @param {Porter_Base_Shared_Dto_Order} dtoOrder
     */
    constructor(
        {
            TeqFw_Core_Shared_Api_Logger$$: logger,
            Porter_Base_Front_Util_Func$: func,
            TeqFw_Web_Api_Front_Web_Connect$: api,
            Porter_Cust_Shared_Web_Api_Order_Create$: endCreate,
            Porter_Base_Shared_Dto_Order$: dtoOrder,
        }
    ) {
        // VARS 

        // INSTANCE METHODS

        /**
         * @param {string} type
         * @return {Promise<Porter_Base_Shared_Dto_Order.Dto>}
         */
        this.create = async function ({type}) {
            try {
                const dto = dtoOrder.createDto();
                dto.type = type;
                dto.uuid = func.randomUUID();
                const req = endCreate.createReq();
                req.entity = dto;
                // noinspection JSValidateTypes
                /** @type {Porter_Cust_Shared_Web_Api_Order_Create.Response} */
                const rs = await api.send(req, endCreate);
                return rs?.entity;
            } catch (e) {
                logger.exception(e);
            }
            return null;
        };
    }
}
