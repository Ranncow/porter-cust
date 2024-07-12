/**
 * The model to encapsulate functionality related to the registration permits.
 * @implements Porter_Base_Front_Api_Model
 */
export default class Porter_Cust_Front_Mod_Room_Permit {
    /**
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {TeqFw_Web_Api_Front_Web_Connect} api
     * @param {Porter_Cust_Shared_Web_Api_Room_Permit_Read} endRead
     * @param {Porter_Cust_Shared_Dto_Room_Permit} dtoPermit
     */
    constructor(
        {
            TeqFw_Core_Shared_Api_Logger$$: logger,
            TeqFw_Web_Api_Front_Web_Connect$: api,
            Porter_Cust_Shared_Web_Api_Room_Permit_Read$: endRead,
            Porter_Cust_Shared_Dto_Room_Permit$: dtoPermit,
        }
    ) {
        // VARS

        // INSTANCE METHODS

        /**
         * @type {function(Porter_Cust_Shared_Dto_Room_Permit.Dto=): Porter_Cust_Shared_Dto_Room_Permit.Dto}
         */
        this.composeEntity = dtoPermit.createDto;

        this.composeItem = (data) => {throw new Error('Is not implemented yet.');};

        /**
         * @param {number} pin
         * @return {Promise<Porter_Cust_Shared_Dto_Room_Permit.Dto>}
         */
        this.read = async function ({pin}) {
            try {
                const req = endRead.createReq();
                req.pin = pin;
                // noinspection JSValidateTypes
                /** @type {Porter_Cust_Shared_Web_Api_Room_Permit_Read.Response} */
                const rs = await api.send(req, endRead);
                if (rs.success) return rs?.entity;
            } catch (e) {
                logger.exception(e);
            }
            return undefined;
        };
    }


}
