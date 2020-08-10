package com.emart.user.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "t_customer")
@EntityListeners(AuditingEntityListener.class)
@Data
@NoArgsConstructor
public class Customer implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    //分组ID
    @NotNull
    @Column(name = "groupId")
    private String groupId;

    //邮箱
    @Column(name = "email")
    private String email;
    
    //昵称
    @Column(name = "nickname")
    private String nickname;

    //用户名
    @NotNull
    @Column(name = "username")
    private String username;

    //密码
    @NotNull
    @Column(name = "password")
    private String password;

    //登录状态
    @Column(name = "loginStatus")
    private String loginStatus;

    //登录IP
    @Column(name = "loginIp")
    private String loginIp;

    //角色
    @Column(name = "userRole")
    private String userRole;

    //头像
    @Column(name = "userImg")
    private String userImg;

    //系统通知
    @Column(name = "sysNotice")
    private String sysNotice;

    //用户登录时间
    @CreatedDate
    @Column(name = "loginDate")
    @JsonFormat(pattern = "yyyyMMdd")
    private Date loginDate;

    //坐席第一次注册时间D
    @Column(name = "regDate")
    @JsonFormat(pattern = "yyyyMMdd")
    private Date regDate;

    //坐席使用开始日
    @Column(name = "createDate")
    @JsonFormat(pattern = "yyyyMMdd")
    private Date createDate;

    //坐席使用截止日
    @Column(name = "exitDate")
    @JsonFormat(pattern = "yyyyMMdd")
    private Date exitDate;
}