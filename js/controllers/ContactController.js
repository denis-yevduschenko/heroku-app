(function (){
    'use strict';
    angular
        .module("CoffeenatorApp")
        .controller("ContactController", ['$http', ContactController]);

    function ContactController($http) {
        var mv = this;

        mv.lastForm = {};
        mv.submitButtonDisabled = false;

        mv.resetForm = resetForm;

        mv.sendForm = sendForm;

        function resetForm() {
            mv.form = angular.copy(mv.lastForm);
            mv.submitButtonDisabled = false;
        }

        function sendForm(form) {
            mv.submitButtonDisabled = true;
            mv.lastForm = angular.copy(form);
            $http({
                method: 'POST',
                url: "/backend/contact-form.php",
                data: {
                    'contactname':mv.form.name,
                    'weburl':mv.form.website,
                    'email':mv.form.email,
                    'subject':mv.form.subject,
                    'message':mv.form.message
                },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(success, error);
        }

        function success(response) {
            mv.status = response.status;
            mv.resultData = response.data;
            alert("Message sent successfully. We'll get in touch with you soon.");
        }

        function error(response) {
            mv.resultData = response.data || 'Request failed';
            mv.status = response.status;
            alert("Sending message failed.");
        }
    }
})();