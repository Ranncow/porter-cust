/**
 * The base screen for the application's homepage.
 *
 * @namespace Porter_Cust_Front_Ui_Route_Home
 */
// MODULE'S VARS
const NS = 'Porter_Cust_Front_Ui_Route_Home';

// MODULE'S FUNCTIONS

/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @param {Porter_Cust_Front_Defaults} DEF
 * @param {Porter_Cust_Front_Mod_Order} modOrder
 * @param {Porter_Cust_Front_Ui_Widget_App_Title} wgTitle
 * @param {typeof Porter_Base_Shared_Enum_Order_Type} TYPE
 *
 * @returns {Porter_Cust_Front_Ui_Route_Home.vueCompTmpl}
 */
export default function (
    {
        Porter_Cust_Front_Defaults$: DEF,
        Porter_Cust_Front_Mod_Order$: modOrder,
        Porter_Cust_Front_Ui_Widget_App_Title$: wgTitle,
        Porter_Base_Shared_Enum_Order_Type$: TYPE,
    }
) {
    // VARS
    const template = `
<layout-main>
    <div class="q-pa-lg q-gutter-sm">
        <q-card>
            <q-card-section class="column justify-between items-center q-gutter-sm">
                <q-btn icon="send" @click="onOrder('${TYPE.CLEANING}')" label="Cleaning"/>
                <q-btn icon="send" @click="onOrder('${TYPE.KITCHEN}')" label="Kitchen"/>
                <q-btn icon="send" @click="onOrder('${TYPE.RECEPTION}')" label="Reception"/>
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
     * @memberOf Porter_Cust_Front_Ui_Route_Home
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        components: {},
        data() {
            return {
                ifLoading: false,
            };
        },
        computed: {},
        methods: {
            async onOrder(type) {
                this.ifLoading = true;
                await modOrder.create({type});
                this.ifLoading = false;
            },
        },
        async mounted() {
            wgTitle.setTitle('Home');
        },
    };
}
