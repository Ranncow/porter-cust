/**
 * The main layout for all customer app routes.
 *
 * @namespace Porter_Cust_Front_Ui_Layout_Main
 */
// MODULE'S VARS
const NS = 'Porter_Cust_Front_Ui_Layout_Main';

// MODULE'S FUNCTIONS

/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @param {Porter_Cust_Front_Defaults} DEF
 * @param {TeqFw_Vue_Front_Util} utilVue
 * @param {Porter_Cust_Front_Ui_Layout_Title.vueCompTmpl} uiTitle
 * @param {Porter_Cust_Front_Ui_Layout_Navigator.vueCompTmpl} uiNavigator
 *
 * @returns {Porter_Cust_Front_Ui_Layout_Main.vueCompTmpl}
 */
export default function (
    {
        Porter_Cust_Front_Defaults$: DEF,
        TeqFw_Vue_Front_Util$: utilVue,
        Porter_Cust_Front_Ui_Layout_Title$: uiTitle,
        Porter_Cust_Front_Ui_Layout_Navigator$: uiNavigator,
    }
) {
    // VARS
    const template = `
<q-layout view="hHh lpR lFf">

    <q-header elevated class="">
        <q-toolbar class="q-pr-xs">
            <q-toolbar-title class="q-pl-xs">
                <ui-title/>
            </q-toolbar-title>
            <div class="q-gutter-sm">
                <q-btn flat icon="menu" @click="toggleNavigator" />
            </div>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="ifNavigatorOpen" side="right" overlay elevated>
        <ui-navigator/>
    </q-drawer>

    <q-page-container>
        <router-view>
            <q-page style="overflow-y: auto; height: calc(100vh - 150px);">
                <slot/>
            </q-page>
        </router-view>
    </q-page-container>

</q-layout>
`;

    // MAIN
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Porter_Cust_Front_Ui_Layout_Main
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        components: {uiNavigator, uiTitle},
        data() {
            return {
                ifNavigatorOpen: false,
            };
        },
        computed: {},
        methods: {
            toggleNavigator() {
                this.ifNavigatorOpen = !this.ifNavigatorOpen;
            }
        },
        created() { },
    };
}
