/**
 * The base screen for the route to register a visit with PIN.
 *
 * @namespace Porter_Cust_Front_Ui_Route_Visit_Reg_Pin
 */
// MODULE'S VARS
const NS = 'Porter_Cust_Front_Ui_Route_Visit_Reg_Pin';

// MODULE'S FUNCTIONS

/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @param {Porter_Cust_Front_Defaults} DEF
 * @param {Porter_Base_Shared_Util_Format} format
 * @param {Porter_Base_Front_Mod_Notify} modNotify
 * @param {Porter_Cust_Front_Mod_Room_Permit} modPermit
 * @param {Porter_Cust_Front_Mod_Room_Visit} modVisit
 * @param {Porter_Cust_Front_Ui_Widget_App_Title} wgTitle
 *
 * @returns {Porter_Cust_Front_Ui_Route_Visit_Reg_Pin.vueCompTmpl}
 */
export default function (
    {
        Porter_Cust_Front_Defaults$: DEF,
        Porter_Base_Shared_Util_Format$: format,
        Porter_Base_Front_Mod_Notify$: modNotify,
        Porter_Cust_Front_Mod_Room_Permit$: modPermit,
        Porter_Cust_Front_Mod_Room_Visit$: modVisit,
        Porter_Cust_Front_Ui_Widget_App_Title$: wgTitle,
    }
) {
    // VARS
    const template = `
<layout-main>
    <div class="q-pa-lg q-gutter-sm">
        <q-card>

            <q-card-section class="row justify-between items-center">
                <q-input v-model="fldPin"
                         dense
                         label="PIN"
                         outlined
                />
                <q-btn outline label="Load" @click="onLoad"/>
            </q-card-section>
            
            <q-card-section class="column justify-center items-center q-gutter-xs" v-if="origin">
                <q-input :model-value="origin?.name"
                         dense
                         label="Name"
                         outlined
                         readonly
                />
                <q-input :model-value="origin?.email"
                         dense
                         label="Email"
                         outlined
                         readonly
                />
                <q-input :model-value="origin?.roomNum"
                         dense
                         label="Room"
                         outlined
                         readonly
                />
                <q-input :model-value="uiDateIn"
                         dense
                         label="Date In"
                         outlined
                         readonly
                />
                <q-input :model-value="uiDateOut"
                         dense
                         label="Date Out"
                         outlined
                         readonly
                />
                
                <q-btn outline label="Check-In" @click="onCheckIn"/>
                
            </q-card-section>

        </q-card>
    </div>
    <ui-spinner :loading="ifLoading"/>
</layout-main>
`;

    // MAIN
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Porter_Cust_Front_Ui_Route_Visit_Reg_Pin
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        components: {},
        data() {
            return {
                fldPin: undefined,
                ifLoading: false,
                /** @type {Porter_Cust_Shared_Dto_Room_Permit.Dto} */
                origin: undefined,
            };
        },
        computed: {
            uiDateIn() {
                return format.dateTime(this.origin?.dateIn, false);
            },
            uiDateOut() {
                return format.dateTime(this.origin?.dateOut, false);
            },
        },
        methods: {
            async onCheckIn() {
                const success = await modVisit.create({permitUuid: this.origin.uuid});
                if (success) {
                    modNotify.positive(`The new visit is registered.`);
                    this.$router.push(DEF.ROUTE_HOME);
                } else
                    modNotify.negative(`Cannot register the visit (permit uuid: ${this.origin?.uuid}).`);
            },
            async onLoad() {
                this.ifLoading = true;
                this.origin = await modPermit.read({pin: this.fldPin});
                if (!this.origin)
                    modNotify.negative(`Cannot find the registration permit for PIN ${this.fldPin}.`);
                this.ifLoading = false;
            },
        },
        async mounted() {
            wgTitle.setTitle('Visit Registration');
        },
    };
}
