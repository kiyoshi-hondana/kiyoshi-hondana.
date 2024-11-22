"use strict"
// 1行目に記載している "use strict" は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

const registryId1 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
const registryId2 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
const registryId3 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
const registryId4 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
const registryId5 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
const registryId6 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
const registryId7 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
const registryId8 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
const registryId9 = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";


const http = new XMLHttpRequest();
const url = "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8";
http.open("GET", url);
http.send();

http.onreadystatechange = (e) => {
  console.log(http.responseText);
};

