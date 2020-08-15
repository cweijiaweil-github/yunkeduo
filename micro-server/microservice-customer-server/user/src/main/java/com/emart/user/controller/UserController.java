package com.emart.user.controller;

import java.util.HashMap;
import java.util.Map;

import com.emart.user.entity.Customer;
import com.emart.user.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;

@RestController
@RequestMapping(value = "user")
public class UserController {

    @Autowired
    UserService userService;

    //登录
    @PostMapping(value = "/login")
    public String userLogin(@RequestBody Customer user) {
        Customer userPojo = this.userService.findUser(user.getUsername(), user.getPassword());
        //※注意如果表Customer中值是null的，jsonString将没有对应值是null的字段。
        System.out.println("userPojo= " + userPojo);
        String jsonString = JSON.toJSONString(userPojo);
        System.out.println("jsonString= " + jsonString);
        return jsonString;
    }

    //退出
    @PostMapping(value = "/loginOut")
    public void loginOut(@RequestBody Customer user) {
        this.userService.loginOut(user.getUsername());
    }

}