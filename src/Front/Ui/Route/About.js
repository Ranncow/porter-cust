/**
 * The base screen for the route.
 *
 * @namespace Porter_Cust_Front_Ui_Route_About
 */
// MODULE'S VARS
const NS = 'Porter_Cust_Front_Ui_Route_About';

// MODULE'S FUNCTIONS

/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @param {Porter_Cust_Front_Defaults} DEF
 * @param {Porter_Cust_Front_Ui_Widget_App_Title} wgTitle
 *
 * @returns {Porter_Cust_Front_Ui_Route_About.vueCompTmpl}
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
                <div>ABOUT</div>
            </q-card-section>
        </q-card>
    </div>
</layout-main>
`;

    // MAIN
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Porter_Cust_Front_Ui_Route_About
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        components: {},
        data() {
            return {};
        },
        computed: {},
        methods: {},
        async mounted() {
            wgTitle.setTitle('About');
        },
    };
}
