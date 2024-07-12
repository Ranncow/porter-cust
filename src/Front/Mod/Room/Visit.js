/**
 * The model to encapsulate functionality related to the visits.
 * @implements Porter_Base_Front_Api_Model
 */
export default class Porter_Cust_Front_Mod_Room_Visit {
    /**
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {TeqFw_Web_Api_Front_Web_Connect} api
     * @param {Porter_Cust_Shared_Web_Api_Room_Visit_Create} endCreate
     * @param {Porter_Base_Front_Mod_Auth_Front} modFront
     * @param {Porter_Cust_Shared_Dto_Room_Visit} dtoVisit
     */
    constructor(
        {
            TeqFw_Core_Shared_Api_Logger$$: logger,
            TeqFw_Web_Api_Front_Web_Connect$: api,
            Porter_Cust_Shared_Web_Api_Room_Visit_Create$: endCreate,
            Porter_Base_Front_Mod_Auth_Front$: modFront,
            Porter_Cust_Shared_Dto_Room_Visit$: dtoVisit,
        }
    ) {
        // VARS

        // INSTANCE METHODS

        /**
         * @type {function(Porter_Cust_Shared_Dto_Room_Visit.Dto=): Porter_Cust_Shared_Dto_Room_Visit.Dto}
         */
        this.composeEntity = dtoVisit.createDto;

        this.composeItem = (data) => {throw new Error('Is not implemented yet.');};

        /**
         * @param {string} permitUuid
         * @return {Promise<boolean>}
         */
        this.create = async function ({permitUuid}) {
            try {
                const req = endCreate.createReq();
                req.frontUuid = modFront.getUuid();
                req.permitUuid = permitUuid;
                // noinspection JSValidateTypes
                /** @type {Porter_Cust_Shared_Web_Api_Room_Visit_Create.Response} */
                const rs = await api.send(req, endCreate);
                return rs?.success;
            } catch (e) {
                logger.exception(e);
            }
            return false;
        };

    }


}
