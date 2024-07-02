const removeTones = (str) => {
  const accentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "dđ",
    "eèẻẽéẹêềểễếệ",
    "iìỉĩíị",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "uùủũúụưừửữứự",
    "yỳỷỹýỵ",
  ];

  str = str.toLowerCase();

  for (let i = 0; i < accentsMap.length; i++) {
    const re = new RegExp(`[${accentsMap[i].substring(1)}]`, "g");
    const char = accentsMap[i][0];
    str = str.replace(re, char);
  }

  return str;
};

export default removeTones;
