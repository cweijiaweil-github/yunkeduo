package com.emart.user.dao;

import javax.transaction.Transactional;

import com.emart.user.entity.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<Customer, Long> {

  @Query(value = "select * from t_customer as t where t.username = ?1 and t.password = ?2", nativeQuery = true)
  public Customer findUser(String username, String password);

  @Modifying
  @Transactional
  @Query(value = "update t_customer c set c.loginStatus=?2 where  c.username=?1", nativeQuery = true)
  int updateStatusByUsername(String username, String loginStatus);

}