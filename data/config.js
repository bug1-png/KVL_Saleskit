/* ตั้งค่าระบบ — ปล่อยว่างไว้ = ใช้ข้อมูลในไฟล์ data/*.js (ใช้งานออฟไลน์ได้ทันที)
 * อนาคต: ใส่ URL ของ API/ไฟล์ JSON ที่ระบบขายอัปเดต แล้วแอปจะดึงข้อมูลล่าสุดเมื่อมีอินเทอร์เน็ต
 * และเก็บ cache ไว้ใช้ตอนออฟไลน์อัตโนมัติ
 *
 * รูปแบบ inventoryUrl  => { "demo":false, "updated":"2026-12-01 09:00", "units":[{id,b,f,type,area,price,status}] }
 * รูปแบบ promotionsUrl => { "items":[{id,title,desc,until,tag,types?:[..],ids?:[..]}] }
 * รูปแบบ hotspotsUrl   => { "3":[{u:"E316",x:0.1,y:0.2,w:0.01,h:0.03}], ... }
 */
window.KVL_CONFIG = {
  inventoryUrl: '',
  promotionsUrl: '',
  hotspotsUrl: '',
  project: 'KAVALON',
  hotline: '02 168 0000',
  web: 'assetwise.co.th'
};
