# 📄 simple-word

**simple-word** — bu foydalanuvchi Google yoki GitHub orqali tizimga kirib, o‘z hujjatlarini yaratishi, ko‘rishi, tahrirlashi va o‘chirish imkoniyatiga ega bo‘lgan web-ilova.

---

## 🔑 Asosiy funksiyalar

- Google yoki GitHub orqali login qilish
- Foydalanuvchi maʼlumotlarini MongoDBʼga saqlash
- Login qilingandan so‘ng quyidagi sahifalar mavjud bo‘ladi:
  - 📝 **Create Document** – yangi hujjat yaratish
  - 📁 **My Documents** – barcha hujjatlarni ko‘rish
  - 🚪 **Logout** – tizimdan chiqish
- Yaratilgan hujjatlarni:
  - Ko‘rish
  - Tahrirlash
  - O‘chirish mumkin
- Barcha himoyalangan sahifalar **middleware** orqali tekshiriladi
- Hujjatlarni tahrirlash uchun **TipTap** editoridan foydalaniladi

---

## 🛠 Ishlatilgan texnologiyalar

- **Next.js 15** – asosiy framework
- **TypeScript** – ishonchli va aniqlik kiritilgan dasturlash
- **NextAuth.js** – autentifikatsiya (Google/GitHub login)
- **MongoDB** – maʼlumotlar bazasi
- **Tailwind CSS** – foydalanuvchi interfeysi uchun
- **Shadcn UI** – tayyor UI komponentlar
- **TipTap** – matn muharriri (Word uslubida)

---

## 📂 Loyiha tarkibi

- `app/` – sahifalar
- `components/` – komponentlar
- `lib/` – autentifikatsiya, MongoDB ulanishi va boshqa yordamchi funksiyalar
- `middleware.ts` – protected route'lar uchun tekshiruvchi qatlam

---
