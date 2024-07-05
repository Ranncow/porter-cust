/**
 * Plugin constants (hardcoded configuration) for backend code.
 */
export default class Porter_Cust_Back_Defaults {

    /** @type {Porter_Cust_Shared_Defaults} */
    SHARED;

    /**
     * @param {Porter_Cust_Shared_Defaults} SHARED
     */
    constructor(
        {
            Porter_Cust_Shared_Defaults$: SHARED,
        }
    ) {
        this.SHARED = SHARED;
        Object.freeze(this);
    }
}
