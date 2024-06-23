import request from "@/module/request";


//获取本体
export function List(name,month) {
  return request({
    method: "post",
    headers: {
        "Content-Type": "application/json",
      },
    url: `/bamboo/MonthMember`,
    data: {
      name:name,
      month:month
    }
  });
}