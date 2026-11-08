# Dawrungdriving

## SEO หลังเผยแพร่

- เพิ่มเว็บไซต์ `https://toto772555.github.io/Dawrungdriving/` แบบ URL-prefix ใน Google Search Console และยืนยันด้วยไฟล์ HTML ที่มีอยู่
- ส่ง `https://toto772555.github.io/Dawrungdriving/sitemap.xml` แล้วตรวจหน้าแรกด้วย URL Inspection และขอจัดทำดัชนี
- robots.txt ในโปรเจกต์อยู่ใต้ `/Dawrungdriving/` แต่ crawler ใช้ `/robots.txt` ที่รากโดเมน ให้ตรวจ `https://toto772555.github.io/robots.txt` ด้วย การไม่มี robots.txt ไม่ได้ห้ามการ crawl; ส่ง sitemap ผ่าน Search Console ได้โดยตรง
- เติมที่อยู่เต็มจริงในส่วนติดต่อและ PostalAddress ของ JSON-LD ให้ตรงกับ Google Business Profile ไม่ใส่ที่อยู่หรือพิกัดโดยคาดเดา
- ตรวจและอัปเดต Google Business Profile: เว็บไซต์ เบอร์โทร เวลาเปิด หมวดหมู่ รูปจริง และตอบรีวิว
- ตรวจ PageSpeed Insights บนมือถือและรายงาน Core Web Vitals หลังเผยแพร่
- ตรวจ Performance ใน Search Console สำหรับคำค้น “สอนขับรถภูเก็ต” และ “โรงเรียนสอนขับรถภูเก็ต” เพื่อติดตาม impressions, clicks และอันดับเฉลี่ย

## งานภาษาเพิ่มเติม

ปัจจุบันปุ่มภาษาเปลี่ยนข้อความด้วย JavaScript ใน URL เดียว ยังไม่มีหน้าแยกสำหรับ SEO แต่ละภาษา หากเพิ่ม `/en/` ให้มีเนื้อหาภาษาอังกฤษใน HTML โดยตรง, title/description/canonical ของตนเอง, ลิงก์สลับภาษา, hreflang ที่อ้างอิงกลับกัน และเพิ่ม URL จริงใน sitemap หลังตรวจคำแปลแล้ว

อย่าเพิ่ม URL ที่ยังไม่มีหน้าจริงใน sitemap หรือเปลี่ยน lastmod โดยไม่มีการแก้เนื้อหาสำคัญ
