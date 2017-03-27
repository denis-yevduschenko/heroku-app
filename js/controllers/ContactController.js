CoffeenatorApp.controller("ContactController", ['$scope', function($scope) {
    $scope.lastForm = {};
    $scope.submitButtonDisabled = false;

    $scope.sendForm = function(form) {
        $scope.submitButtonDisabled = true;
        $scope.lastForm = angular.copy(form);
        $http({
            method: 'POST',
            url: "/backend/contact-form.php",
            data: {
                'contactname':$scope.form.name,
                'weburl':$scope.form.website,
                'email':$scope.form.email,
                'subject':$scope.form.subject,
                'message':$scope.form.message
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            $scope.status = response.status;
            $scope.resultData = response.data;
            alert("Message sent successfully. We'll get in touch with you soon.");
        }, function(response) {
            $scope.resultData = response.data || 'Request failed';
            $scope.status = response.status;
            alert("Sending message failed.");
        });
    };

    $scope.resetForm = function() {
        $scope.form = angular.copy($scope.lastForm);
        $scope.submitButtonDisabled = false;
    };
}]);