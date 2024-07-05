/**
 * Plugin constants (hardcoded configuration) for frontend code.
 */
export default class Porter_Cust_Front_Defaults {
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
