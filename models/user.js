'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type:DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
    hooks: {
      beforeCreate:(user,options)=>{
        return new Promise((res,rej)=>{
          let salt = bcrypt.genSalt(10,(err,result)=>result);
          bcrypt.hash(user.password,salt,null,(err,hash)=>{
            user.password_hash = hash;
          });
          res();
        });
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
 

  return User;
};