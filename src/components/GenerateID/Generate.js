const generateUUID = (length) => {
  var baseStr = "";
  if (length) {
    for (var i = 0; i < length; i++) baseStr += "x";
  } else {
    baseStr = "xxxxxxxxxx";
  }
  var d = new Date().getTime();
  var uuid = baseStr.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

export default generateUUID;
