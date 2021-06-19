import "bootstrap/dist/css/bootstrap.css";
import "jack-hermanson-css-lib/css/main.css";
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
