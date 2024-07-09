/**
 * Create a test order on the back.
 * Re-send the order data into the desk app.
 */
// MODULE'S CLASSES
/**
 * @implements TeqFw_Web_Api_Back_Api_Service
 */
export default class Porter_Cust_Back_Web_Api_Order_Create {
    /**
     * @param {Porter_Base_Back_Defaults} DEF
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {TeqFw_Core_Back_Config} config
     * @param {TeqFw_Web_Api_Shared_Api_Request} Es6Request
     * @param {Porter_Base_Back_Util_Web} utilWeb
     * @param {Porter_Cust_Shared_Web_Api_Order_Create} endpoint
     * @param {Porter_Base_Shared_Web_Api_App_Refresh} endRefresh
     */
    constructor(
        {
            Porter_Base_Back_Defaults$: DEF,
            TeqFw_Core_Shared_Api_Logger$$: logger,
            TeqFw_Core_Back_Config$: config,
            TeqFw_Web_Api_Shared_Api_Request: Es6Request,
            Porter_Base_Back_Util_Web$: utilWeb,
            Porter_Cust_Shared_Web_Api_Order_Create$: endpoint,
            Porter_Base_Shared_Web_Api_App_Refresh$: endRefresh,
        }
    ) {
        // VARS
        const {
            /** @type {typeof TeqFw_Web_Api_Shared_Api_Request} */
            default: Request
        } = Es6Request;
        const URL = getDeskUrl();

        // FUNCS
        function getDeskUrl() {
            /** @type {Porter_Base_Back_Plugin_Dto_Config_Local.Dto} */
            const cfg = config.getLocal(DEF.SHARED.NAME);
            const host = cfg.url.desk;
            const space = DEF.MOD_WEB_API.SHARED.SPACE_SERVICE;
            const route = endRefresh.constructor.name;
            return `${host}/${space}/${route}`;
        }


        // INSTANCE METHODS

        this.getEndpoint = () => endpoint;

        this.init = async function () { };

        /**
         * @param {Porter_Cust_Shared_Web_Api_Order_Create.Request} req
         * @param {Porter_Cust_Shared_Web_Api_Order_Create.Response} res
         * @param {TeqFw_Web_Api_Back_Api_Service_Context} context
         * @returns {Promise<void>}
         */
        this.process = async function (req, res, context) {
            const rs = endpoint.createRes();
            try {
                const dto = req.entity;
                logger.info(`Process front request to create new order: ${JSON.stringify(dto)}`);
                // compose a request to the desk
                const deskReq = endRefresh.createReq();
                deskReq.order = dto;
                const postReq = new Request();
                postReq.data = deskReq;
                const postRes = await utilWeb.postRequest(URL, postReq, []);
                /** @type {Porter_Base_Shared_Web_Api_App_Refresh.Response} */
                const deskRes = postRes.data;
                if (deskRes.success) {
                    rs.entity = dto;
                    rs.success = true;
                }
                Object.assign(res, rs);
            } catch (error) {
                logger.exception(error);
            }
        };
    }

}
