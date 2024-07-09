/**
 * Plugin constants (hardcoded configuration) for backend code.
 */
export default class Porter_Cust_Back_Defaults {

    /** @type {Porter_Base_Back_Defaults} */
    MOD_BASE;
    /** @type {Porter_Cust_Shared_Defaults} */
    SHARED;

    /**
     * @param {Porter_Base_Back_Defaults} MOD_BASE
     * @param {Porter_Cust_Shared_Defaults} SHARED
     */
    constructor(
        {
            Porter_Base_Back_Defaults$: MOD_BASE,
            Porter_Cust_Shared_Defaults$: SHARED,
        }
    ) {
        this.MOD_BASE = MOD_BASE;
        this.SHARED = SHARED;
        Object.freeze(this);
    }
}
