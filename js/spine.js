// new Vue({
//     el: '#app',
//     data: {
//         show_sign_up_form: true,
//         sign_up_form_text: true,
//         show_login_form: false,
//         login_form_text: false,
//         show_recovery_form: false,
//         // ----------
//         setup_con: true,
//         recovery_con: false,
//     },
//     methods: {
//         switch_to_login: function () {
//             if (this.show_sign_up_form = true) {
//                 this.show_sign_up_form = false;
//                 this.sign_up_form_text = false;
//                 this.login_form_text = true;
//             }
//         },
//         switch_to_sign_up: function () {
//             if (this.show_login_form = true) {
//                 this.show_sign_up_form = true;
//                 this.sign_up_form_text = true;
//                 this.login_form_text = false;
//             }
//         },
//         show_recovery_path: function () {
//             this.setup_con = false;
//             this.recovery_con = true
//         }
//     }
// })