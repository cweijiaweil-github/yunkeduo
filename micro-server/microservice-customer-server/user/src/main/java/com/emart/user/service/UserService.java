package com.emart.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emart.user.dao.UserDao;
import com.emart.user.entity.Customer;
import com.emart.user.service.UserService;
@Service
public class UserService {
    
   
    @Autowired
    UserDao userDao;


    public Customer findUser(String username, String password) {
        try {
            Customer customer =  this.userDao.findUser(username, password);
            if(customer != null){
                //更新登录状态
                int count = this.userDao.updateStatusByUsername(username, "1");
                System.out.println("count= "+count);
            }
            return customer;
        } catch (Exception e) {
            return null;
        }
    }
    
    public void loginOut(String username) {
        try {
            //更新登录状态
            int count = this.userDao.updateStatusByUsername(username, "0");
            System.out.println("count= "+count);
        } catch (Exception e) {
        }
    }
}