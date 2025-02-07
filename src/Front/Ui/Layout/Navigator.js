/**
 * The right navigator.
 *
 * @namespace Porter_Cust_Front_Ui_Layout_Navigator
 */
// MODULE'S VARS
const NS = 'Porter_Cust_Front_Ui_Layout_Navigator';

// MODULE'S FUNCTIONS

/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @param {Porter_Cust_Front_Defaults} DEF
 * @param {TeqFw_Web_Front_Mod_Version} modVersion
 *
 * @returns {Porter_Cust_Front_Ui_Layout_Navigator.vueCompTmpl}
 */
export default function (
    {
        Porter_Cust_Front_Defaults$: DEF,
        TeqFw_Web_Front_Mod_Version$: modVersion,
    }
) {
    // VARS
    const template = `
<q-scroll-area class="fit">

    <q-list>

        <template v-for="(item, index) in items" :key="index">
            <q-item clickable :active="ifActive(item)" v-ripple v-on:click="onClick(item)">
                <q-item-section avatar>
                    <q-icon :name="item.icon"/>
                </q-item-section>
                <q-item-section>
                    {{ item.label }}
                </q-item-section>
            </q-item>
        </template>

    </q-list>
    
    <div class="text-right text-caption q-pr-xs q-pt-xl">
        version: {{uiVersion}}
    </div>
   
</q-scroll-area>
`;

    // MAIN
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Porter_Cust_Front_Ui_Layout_Navigator
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        components: {},
        computed: {
            items() {
                return [
                    {
                        icon: 'home',
                        label: 'Home',
                        route: DEF.ROUTE_HOME,
                    }, {
                        icon: 'pin',
                        label: 'PIN',
                        route: DEF.ROUTE_VISIT_REG_PIN,
                    }, {
                        icon: 'settings',
                        label: 'Settings',
                        route: DEF.ROUTE_SETTINGS,
                    }, {
                        icon: 'help',
                        label: 'About',
                        route: DEF.ROUTE_ABOUT,
                    },
                ];
            },
            uiVersion() {
                return modVersion.versionInstalled();
            },
        },
        methods: {
            ifActive(item) {
                return (this.$router.currentRoute.value.fullPath === item?.route);
            },
            onClick(item) {
                this.$router.push(item?.route ?? DEF.ROUTE_HOME);
            },
        },
    };
}
