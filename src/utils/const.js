export const pwdReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,30}$/;
export const pwdRegText = "密码支持数字、字母、特殊字符，两种及以上类型组合，长度限制8-30之间";

export const blankSpaceReg = /\s+/;

export const chineseReg = /[\u4e00-\u9fa5]+/;
export const numReg = /[0-9]+/;
export const englishReg = /[a-zA-Z]+/;
export const wechatnameReg = /^[\u4E00-\u9FA5A-Za-z]+\([\u4E00-\u9FA5A-Za-z]+\)$/;
export const specialCodeReg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]<>/?~！@#￥……&*（）——|{}【】‘；：”“’。，、？]+");
export const gitRepositoryReg = /^(git@github.com:)[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

export const nameValidator = (rule, value, callback) => {
  if (value) {
    value = value.trim();
    if (value.length < 2 || value.length > 30) {
      callback("名称长度限制在2~30之间");
    } else if (specialCodeReg.test(value)) {
      callback("名称不能包含特殊字符");
    }
  }
  callback();
};

export const wechatnameValidator = (rule, value, callback) => {
  if (value) {
    value = value.trim();
    if (value.length < 2 || value.length > 30) {
      callback("名称长度限制在2~30之间");
    } else if (!wechatnameReg.test(value)) {
      callback("请输入正确的企业微信");
    }
  }
  callback();
};

export const englishNameValidator = (rule, value, callback) => {
  if (value) {
    value = value.trim();
    if (value.length < 2 || value.length > 30) {
      callback("名称长度限制在2~30之间");
    } else if (!englishReg.test(value)) {
      callback("请输入全英文");
    }
  }
  callback();
};

export const chineseNameValidator = (rule, value, callback) => {
  if (value) {
    value = value.trim();
    if (value.length < 2 || value.length > 30) {
      callback("名称长度限制在2~30之间");
    } else if (!chineseReg.test(value)) {
      callback("请输入全中文");
    }
  }
  callback();
};

export const dpmsIdValidator = (rule, value, callback) => {
  if (value) {
    // value = value.trim(); // int类使用trim方法会报错
    if (value.length < 2 || value.length > 30) {
      callback("名称长度限制在2~30之间");
    } else if (!numReg.test(value)) {
      callback("请输入全中文");
    }
  }
  callback();
};

export const pwdValidator = (rule, value, callback) => {
  if (value) {
    if (value.length < 8 || value.length > 30) {
      callback("密码长度限制8~30之间");
    } else if (!pwdReg.test(value)) {
      callback("你的密码复杂度太低, 请重新输入");
    }
  }
  callback();
};

export const gitRepositoryValidator = (rule, value, callback) => {
  if (value) {
    if (!value.trim().startsWith("git@github.com:")) {
      callback("请输入git@github.com:XXXX/XXX.git");
    }
  }
  callback();
};
