/**
 * Register a new visit.
 */
// MODULE'S CLASSES

/**
 * @implements TeqFw_Web_Api_Back_Api_Service
 */
export default class Porter_Cust_Back_Web_Api_Room_Visit_Create {
    /**
     * @param {Porter_Base_Back_Defaults} DEF
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {Porter_Cust_Shared_Web_Api_Room_Visit_Create} endpoint
     * @param {TeqFw_Db_Back_RDb_IConnect} conn
     * @param {TeqFw_Db_Back_Api_RDb_CrudEngine} crud
     * @param {Porter_Base_Back_Store_RDb_Schema_Auth_Front} rdbFront
     * @param {Porter_Base_Back_Store_RDb_Schema_Room_Visit} rdbVisit
     * @param {Porter_Base_Back_Act_Auth_Front_Read} actFrontRead
     * @param {Porter_Base_Back_Act_Room_Permit_Read} actPermitRead
     * @param {Porter_Base_Back_Act_Room_Visit_Read} actVisitRead
     * @param {Porter_Base_Back_Mod_Auth_Session} modSession
     * @param {Porter_Cust_Back_Convert_Room_Visit} convertVisit
     */
    constructor(
        {
            Porter_Base_Back_Defaults$: DEF,
            TeqFw_Core_Shared_Api_Logger$$: logger,
            Porter_Cust_Shared_Web_Api_Room_Visit_Create$: endpoint,
            TeqFw_Db_Back_RDb_IConnect$: conn,
            TeqFw_Db_Back_Api_RDb_CrudEngine$: crud,
            Porter_Base_Back_Store_RDb_Schema_Auth_Front$: rdbFront,
            Porter_Base_Back_Store_RDb_Schema_Room_Visit$: rdbVisit,
            Porter_Base_Back_Act_Auth_Front_Read$: actFrontRead,
            Porter_Base_Back_Act_Room_Permit_Read$: actPermitRead,
            Porter_Base_Back_Act_Room_Visit_Read$: actVisitRead,
            Porter_Base_Back_Mod_Auth_Session$: modSession,
            Porter_Cust_Back_Convert_Room_Visit$: convertVisit,
        }
    ) {
        // VARS
        const A_FRONT = rdbFront.getAttributes();
        const A_VISIT = rdbVisit.getAttributes();

        // FUNCS
        // INSTANCE METHODS

        this.getEndpoint = () => endpoint;

        this.init = async function () { };

        /**
         * @param {Porter_Cust_Shared_Web_Api_Room_Visit_Create.Request} req
         * @param {Porter_Cust_Shared_Web_Api_Room_Visit_Create.Response} res
         * @param {TeqFw_Web_Api_Back_Api_Service_Context} context
         * @returns {Promise<void>}
         */
        this.process = async function (req, res, context) {
            const rs = endpoint.createRes();
            const trx = await conn.startTransaction();
            try {
                const {dbPermit} = await actPermitRead.act({trx, uuid: req.permitUuid});
                if (dbPermit?.id) {
                    const {dbFront} = await actFrontRead.act({trx, uuid: req.frontUuid});
                    let frontId = dbFront?.id;
                    if (!frontId) {
                        const dto = rdbFront.createDto();
                        dto.uuid = req.frontUuid;
                        const {[A_FRONT.ID]: id} = await crud.create(trx, rdbFront, dto);
                        frontId = id;
                    }
                    // register visit in RDB
                    const dto = rdbVisit.createDto();
                    dto.date_created = new Date();
                    dto.date_in = dbPermit.date_in;
                    dto.date_out = dbPermit.date_out;
                    dto.email = dbPermit.email;
                    dto.front_ref = frontId;
                    dto.name = dbPermit.name;
                    dto.room_ref = dbPermit.room_ref;
                    const {[A_VISIT.ID]: id} = await crud.create(trx, rdbVisit, dto);
                    const {dbVisit, dbRoom} = await actVisitRead.act({trx, id});
                    rs.entity = convertVisit.rdb2share({dbVisit, dbRoom});
                    // establish a new session
                    const {dbSession} = await modSession.establish({trx, httpRes: context.response, frontId});
                    rs.sessionApiKey = dbSession.api_key;
                    // mark result as succeed
                    rs.success = true;
                }
                await trx.commit();
                Object.assign(res, rs); // compose the response after the commit
            } catch (error) {
                logger.exception(error);
                await trx.rollback();
            }
        };
    }

}
