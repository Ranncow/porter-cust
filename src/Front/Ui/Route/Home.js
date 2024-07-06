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
 * @param {Porter_Cust_Front_Ui_Widget_App_Title} wgTitle
 *
 * @returns {Porter_Cust_Front_Ui_Route_Home.vueCompTmpl}
 */
export default function (
    {
        Porter_Cust_Front_Defaults$: DEF,
        Porter_Cust_Front_Ui_Widget_App_Title$: wgTitle,
    }
) {
    // VARS
    const template = `
<layout-main>
    <div class="q-pa-lg q-gutter-sm">
        <q-card>
            <q-card-section class="row justify-between items-center">
                <div class="column">
                    <div class="text-caption">HOME</div>
                    <div class="text-h6">{{uiName}}</div>
                </div>
                <div>
                    <q-btn icon="home" @click="onHome"/>
                </div>
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
        computed: {
            uiName() {
                return 'User Name';
            },
        },
        methods: {
            onHome() {
                console.log(`Just a click!`);
            },
        },
        async mounted() {
            wgTitle.setTitle('Home');
        },
    };
}
