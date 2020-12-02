import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "./colors";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi", // default
        values: {
            // arrow: "mdi-chevron-down",
        },
    },
    theme: {
        themes: {
            light: {
                primary: colors.purple,
                // secondary: colors.purple, // #FFCDD2
                // accent: colors.purple, // #3F51B5
                // error: colors.purple,
                // info: colors.purple,
                // success: colors.purple,
                // warning: colors.purple,
            },
        },
    },
});
