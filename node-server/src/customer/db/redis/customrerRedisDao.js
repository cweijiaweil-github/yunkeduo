const Redis = require("ioredis");
const request = require('sync-request');
const redisKeyLogin = "login:"

class CustomerRedisDao {
    constructor(x) {
        // _x 是一个私有变量
        this._x = x
    }

    //获取redis
    getRedisConnection() {
        return new Redis({
            host: "localhost",
            post: "6379"
        });
    }

    //登录  首先从reids中判断登录用户信息是否一致，如果redis没有这个用户，再向mysql里查找用户信息。
    //return 0:用户名密码不正确；1：用户名密码正确，用户未登录；2：用户密码正确，用户已登录。
    async userLogin(username, password) {
        let loginFlg = 0; //loginFlg => 0:不匹配;1:匹配
        const redis = await this.getRedisConnection();
        const existFlg = await redis.exists(redisKeyLogin + username);
        console.log("userLogin existFlg=" + existFlg)
        console.log("userLogin redis key=" + redisKeyLogin + username)
        if (existFlg == 1) { //existFlg => 0:不存在;1:存在
            await redis.get(redisKeyLogin + username, (error, data) => {
                redis.quit();
                let out_redis = JSON.parse(data);
                //密码是否一致
                if (out_redis != null && out_redis.password === password) {
                    loginFlg = 1;
                    //是否已经登录
                    if (out_redis.loginStatus === "1") {
                        loginFlg = 2;
                    }
                }
            })
        } else {
            //通过mysql查询，如果用户存在res.getBody不为空并且将用户信息追加到Redis，否则res.getBody为空。
            let res = request("POST", "http://localhost:6061/user/login", { json: { "username": username, "password": password } });
            if (res.statusCode == 200) {
                let body = JSON.parse(res.getBody('utf8'));
                // if (res.getBody('utf8') !== "null") {
                if (body != null) {
                    loginFlg = 1;
                    //是否已经登录
                    if (body.loginStatus === "1") {
                        loginFlg = 2;
                    }
                    //redis保存登录用户的全部信息
                    await redis.set(redisKeyLogin + username, res.getBody('utf8'), (error, result) => {
                        redis.quit();
                    });
                }
            }
        }

        return loginFlg;
    }


    async loginOut(username, password) {

    }



}

module.exports = new CustomerRedisDao();