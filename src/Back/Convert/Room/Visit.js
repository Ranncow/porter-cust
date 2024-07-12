/**
 * Convert shared DTO from/to other related DTOs (RDB, ...).
 * @implements Porter_Base_Back_Api_Convert
 */
export default class Porter_Cust_Back_Convert_Room_Visit {
    /**
     * @param {TeqFw_Core_Shared_Util_Cast} cast
     * @param {Porter_Cust_Shared_Dto_Room_Visit} shared
     * @param {Porter_Base_Back_Store_RDb_Schema_Room_Visit} rdbVisit
     */
    constructor(
        {
            TeqFw_Core_Shared_Util_Cast$: cast,
            Porter_Cust_Shared_Dto_Room_Visit$: shared,
            Porter_Base_Back_Store_RDb_Schema_Room_Visit$: rdbVisit,
        }
    ) {
        // INSTANCE METHODS

        /**
         * @param {Porter_Base_Back_Store_RDb_Schema_Room_Visit.Dto} dbVisit
         * @param {Porter_Base_Back_Store_RDb_Schema_Room.Dto} dbRoom
         * @returns {Porter_Cust_Shared_Dto_Room_Visit.Dto}
         */
        this.rdb2share = function ({dbVisit, dbRoom}) {
            const res = shared.createDto();
            res.dateCreated = cast.date(dbVisit?.date_created);
            res.dateIn = cast.date(dbVisit?.date_in);
            res.dateOut = cast.date(dbVisit?.date_out);
            res.email = cast.string(dbVisit?.email);
            res.name = cast.string(dbVisit?.name);
            res.roomNum = cast.int(dbRoom?.number);
            res.roomRef = cast.int(dbVisit?.room_ref);
            return res;
        };

        /**
         * The structure of the returned value.
         * @typedef {Object} Share2RdbResult
         * @property {Porter_Base_Back_Store_RDb_Schema_Room_Visit.Dto} dbVisit
         * @memberof Porter_Cust_Back_Convert_Room_Visit
         */

        /**
         * @param {Porter_Cust_Shared_Dto_Room_Visit.Dto} visit
         * @return {Share2RdbResult}
         */
        this.share2rdb = function ({visit}) {
            const dbVisit = rdbVisit.createDto();
            dbVisit.date_created = cast.date(visit?.dateCreated);
            dbVisit.date_in = cast.date(visit?.dateIn);
            dbVisit.date_out = cast.date(visit?.dateOut);
            dbVisit.email = cast.string(visit?.email);
            dbVisit.name = cast.string(visit?.name);
            dbVisit.pin = cast.int(visit?.pin);
            dbVisit.room_ref = cast.int(visit?.roomRef);
            dbVisit.uuid = cast.string(visit?.uuid);
            return {dbVisit};
        };
    }
}
