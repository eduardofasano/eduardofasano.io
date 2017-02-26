angular.module('eduardo-portfolio')
.controller('ContactController', Contact);

Contact.$inject = ['$http'];
function Contact($http) {
  const Contact = this;

  Contact.email = {};

  Contact.sendMail = function () {
    return $http({
      method: 'POST',
      url: '/api/sendMail',
      data: Contact.email
    });
  };
}
