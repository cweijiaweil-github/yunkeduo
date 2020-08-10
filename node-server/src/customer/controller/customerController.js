const costomerService = require("../service/customerService")


class CustomerController {


    async userLogin(username, password) {
        return await costomerService.userLogin(username, password);
    }



}

module.exports = new CustomerController();