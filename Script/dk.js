function now() {
        dt = new Date();
        var y=dt.getFullYear();
        var m=dt.getMonth() + 1;
        var d=dt.getDate();
        var h=dt.getHours();
        var i=dt.getMinutes();
        var s=dt.getSeconds();
        return (y+"-"+m+"-"+d+" "+h+":"+i+":"+s);
    }
p = {
  "content" : {
    "radius" : "3473.958353",
    "floor" : "",
    "sema" : {
      "aptag" : "在高新南(地铁站)附近",
      "aptagd" : {
        "pois" : [
          {
            "pid" : "9062083800567878516",
            "pname" : "高新南(地铁站)",
            "pr" : 0.98999999999999999
          },
          {
            "pid" : "8889372294355115055",
            "pname" : "豪威科技大厦",
            "pr" : 0.98999999999999999
          },
          {
            "pid" : "15143541117465721803",
            "pname" : "深圳湾科技生态园9栋-B5座",
            "pr" : 0.98999999999999999
          },
          {
            "pid" : "11583292846891069089",
            "pname" : "科技生态园公交首末站",
            "pr" : 0.98999999999999999
          },
          {
            "pid" : "1690394263887033230",
            "pname" : "深圳湾科技生态园12栋B座",
            "pr" : 0.98999999999999999
          }
        ]
      }
    },
    "point" : {
      "x" : "113.947395",
      "y" : "22.535717"
    },
    "addr" : {
      "adcode" : "440305",
      "city" : "深圳市",
      "country" : "中国",
      "district" : "南山区",
      "street" : "白石路",
      "city_code" : "340",
      "country_code" : "0",
      "province" : "广东省"
    },
    "navi" : ",,,",
    "bldg" : ""
  },
  "result" : {
    "error" : "161",
    "time" : now()
  }
}
var body = $response.body;
var obj = JSON.parse(body);

obj = p;
body = JSON.stringify(obj);

console.log(body);

$done(body);
