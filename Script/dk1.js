p={
  "content" : {
    "radius" : "65.000000",
    "floor" : "",
    "sema" : {
      "aptag" : "在深圳湾科技生态园三四区附近",
      "aptagd" : {
        "pois" : [
          {
            "pid" : "7044342488555885921",
            "pname" : "深圳湾科技生态园三四区",
            "pr" : 0.98999999999999999
          },
          {
            "pid" : "4927290336215913094",
            "pname" : "深圳湾科技生态园",
            "pr" : 0.98999999999999999
          },
          {
            "pid" : "1045552958291303324",
            "pname" : "蛭爱天下",
            "pr" : 0.98999999999999999
          },
          {
            "pid" : "17989885787205812347",
            "pname" : "深圳湾科技生态园12栋-A座",
            "pr" : 0.98999999999999999
          },
          {
            "pid" : "5397855784871452275",
            "pname" : "深圳·筑梦之星深圳湾科技生态园基地",
            "pr" : 0.98999999999999999
          }
        ]
      }
    },
    "point" : {
      "x" : "113.946142",
      "y" : "22.534321"
    },
    "addr" : {
      "adcode" : "440305",
      "city" : "深圳市",
      "country" : "中国",
      "district" : "南山区",
      "street" : "高新南环路",
      "city_code" : "340",
      "country_code" : "0",
      "province" : "广东省"
    },
    "navi" : ",,,",
    "bldg" : ""
  },
  "result" : {
    "error" : "161",
    "time" : "2021-05-24 21:02:09"
  }
}
var body = $response.body;
var obj = JSON.parse(body);

obj = p;
body = JSON.stringify(obj);

console.log(body);

$done(body);
