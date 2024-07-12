/**
 * Plugin constants (hardcoded configuration) for frontend code.
 */
export default class Porter_Cust_Front_Defaults {

    ROUTE_ABOUT = '/about';
    ROUTE_APP_UPGRADE = '/app/upgrade';
    ROUTE_HOME = '/';
    ROUTE_SETTINGS = '/settings';
    ROUTE_VISIT_REG_PIN = '/visit/reg/pin';

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
