export default {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
                    @import "./include-media/dist/_include-media.scss";
                `
            },
        },
    },
};