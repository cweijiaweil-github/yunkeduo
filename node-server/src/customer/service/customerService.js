const costomerRedisDao = require("../db/redis/customrerRedisDao")


class CustomerService {

    async userLogin(username, password) {
        return await costomerRedisDao.userLogin(username, password);
    }
}

module.exports = new CustomerService();