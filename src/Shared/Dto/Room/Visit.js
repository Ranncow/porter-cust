/**
 * Structure the shared data about a visit registration.
 */
// MODULE'S VARS
const NS = 'Porter_Cust_Shared_Dto_Room_Visit';

/**
 * @memberOf Porter_Cust_Shared_Dto_Room_Visit
 * @type {Object}
 */
const ATTR = {
    DATE_CREATED: 'dateCreated',
    DATE_IN: 'dateIn',
    DATE_OUT: 'dateOut',
    EMAIL: 'email',
    NAME: 'name',
    ROOM_NUM: 'roomNum',
    ROOM_REF: 'roomRef',
};

// MODULE'S CLASSES
/**
 * @memberOf Porter_Cust_Shared_Dto_Room_Visit
 */
class Dto {
    static namespace = NS;
    /**
     * Date-time when record was created.
     * @type {Date}
     */
    dateCreated;
    /**
     * Date-time when the visitor should check into the room.
     * @type {Date}
     */
    dateIn;
    /**
     * Date-time when the visitor should check out the room.
     * @type {Date}
     */
    dateOut;
    /**
     * The email of the visitor to get a link to register a visit.
     * @type {string}
     */
    email;
    /**
     * The name of the visitor.
     * @type {string}
     */
    name;
    /**
     * The number of the related room.
     * @type {number}
     */
    roomNum;
    /**
     * The reference to related room.
     * @type {number}
     */
    roomRef;
}

/**
 * @implements TeqFw_Core_Shared_Api_Factory_Dto_Meta
 */
export default class Porter_Cust_Shared_Dto_Room_Visit {
    /**
     * @param {TeqFw_Core_Shared_Util_Cast} cast
     */
    constructor(
        {
            TeqFw_Core_Shared_Util_Cast$: cast,
        }
    ) {
        // INSTANCE METHODS
        /**
         * @param {Porter_Cust_Shared_Dto_Room_Visit.Dto} [data]
         * @return {Porter_Cust_Shared_Dto_Room_Visit.Dto}
         */
        this.createDto = function (data) {
            // create new DTO and populate it with initialization data
            const res = Object.assign(new Dto(), data);
            // cast known attributes
            res.dateCreated = cast.date(data?.dateCreated);
            res.dateIn = cast.date(data?.dateIn);
            res.dateOut = cast.date(data?.dateOut);
            res.email = cast.string(data?.email);
            res.name = cast.string(data?.name);
            res.roomNum = cast.int(data?.roomNum);
            res.roomRef = cast.int(data?.roomRef);
            return res;
        };

        this.getAttributes = () => ATTR;
    }

}
