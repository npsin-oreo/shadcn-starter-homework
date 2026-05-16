# Project Structure — Momento Landing Page

เอกสารนี้อธิบายโครงสร้างโปรเจกต์สำหรับนักเรียน เป็นงานสร้างหน้าเว็บ (Momento)
จากดีไซน์ Figma ด้วย **Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui**
โค้ดในรีโปนี้เป็น **reference ที่ทำงานได้จริง** — เปิดอ่านเทียบได้ทุกไฟล์

> โครงสร้างนี้ "คงเดิม" ตามที่ส่งมอบ ไม่มีการ refactor — เอกสารนี้แค่อธิบายของที่มีอยู่

---

## 1. ภาพรวม

- หน้าเว็บ Momento ถูกสร้างจาก Figma node `5088-11199` (13 ส่วน, ยาว ~7180px)
- **แยกโค้ดหน้าเว็บไว้ในโฟลเดอร์ `web/`** ออกจากโครงหลักของ Next.js (`app/`)
  เพื่อให้โครงสร้างชัด รัน/ทดสอบแยกส่วนได้ — แต่ยังเสิร์ฟผ่าน dev server เดิม
- เปิดดูหน้าได้ที่เส้นทาง **`/momento`**

**Tech stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4
· shadcn/ui (new-york, Radix) · lucide-react

---

## 2. โครงสร้างโฟลเดอร์ (ตามจริง)

```
shadcn-figma-starter-batch2/
├── app/                          # Next.js App Router (โครงหลัก)
│   ├── layout.tsx                # Root layout (<html>/<body>, import globals.css)
│   ├── page.tsx                  # หน้าแรก "/" (placeholder ของ starter)
│   ├── globals.css               # ⭐ Design tokens ทั้งหมด (แก้สี/ธีมที่นี่เท่านั้น)
│   └── momento/
│       └── page.tsx              # Route "/momento" — บางๆ แค่ render <MomentoPage/>
│
├── web/                          # ⭐ โค้ด implementation หน้าเว็บ (แยกจาก app/)
│   └── momento/
│       ├── momento-page.tsx      # ประกอบทุก section เข้าด้วยกัน (หน้าเต็ม)
│       ├── components/
│       │   └── container.tsx     # ตัวครอบความกว้าง/เกตเตอร์ ใช้ซ้ำทุก section
│       └── sections/             # 1 ไฟล์ = 1 ส่วนของหน้า (เรียงบนลงล่าง)
│           ├── announcement-bar.tsx
│           ├── navbar.tsx
│           ├── hero.tsx          # badge + headline + ปุ่ม + dashboard
│           ├── dashboard-preview.tsx   # mockup แดชบอร์ดในhero
│           ├── logo-strip.tsx    # แถบโลโก้ลูกค้า (รูปจริงใน public/clients)
│           ├── case-studies.tsx
│           ├── features.tsx      # tabs + การ์ดฟีเจอร์ 4 ใบ
│           ├── customized-card.tsx     # การ์ด + ตารางเปรียบเทียบ
│           ├── faq.tsx           # accordion
│           ├── cta.tsx
│           └── footer.tsx
│
├── components/
│   └── ui/                       # shadcn/ui — สร้างด้วย CLI เท่านั้น (ห้ามแก้มือ)
│       ├── accordion.tsx  avatar.tsx  badge.tsx  button.tsx
│       ├── card.tsx  input.tsx  separator.tsx  tabs.tsx
│
├── lib/
│   └── utils.ts                  # cn() — รวม className แบบมีเงื่อนไข
│
├── public/                       # ไฟล์ static (เสิร์ฟที่ root URL)
│   ├── clients/                  # โลโก้ลูกค้าจริง 6 ตัว (ใช้ใน logo-strip)
│   │   ├── openai.png  mparticle.png  starburst.png
│   │   └── capacitorjs.png  apollo.png  teamwork.png
│   └── galaxy-s26-ultra-in-the-box.jpg   # ไฟล์ทดลอง (ไม่ได้ใช้ในหน้า)
│
├── DESIGN.md                     # [*] สเปก design system (tokens/กฎ) — อ่านก่อนแก้
├── CLAUDE.md / AGENTS.md         # คำสั่งสำหรับ AI agent + วิธีใช้
├── .claude/skills/shadcn-ui-tailwind-figma/SKILL.md   # workflow Figma→code
├── components.json               # config ของ shadcn CLI
├── tsconfig.json                 # alias "@/*" → root  (เช่น @/components, @/web)
├── next.config.ts  postcss.config.mjs  .gitignore
└── package.json / package-lock.json
```

> ที่ไม่อยู่ในรีโป (ปกติ — ถูก `.gitignore`): `node_modules/`, `.next/`,
> `next-env.d.ts` (Next สร้างให้อัตโนมัติ)

---

## 3. หน้าเว็บถูก render อย่างไร (data flow)

```
เปิด /momento
   └─> app/momento/page.tsx          (route — มี metadata, render component)
          └─> web/momento/momento-page.tsx   (เรียง 11 sections)
                 └─> web/momento/sections/*.tsx
                        └─> components/ui/*  +  Container  +  lib/utils (cn)
                               └─> สี/ระยะ มาจาก token ใน app/globals.css
```

จุดสำคัญที่นักเรียนควรเข้าใจ:
- `app/momento/page.tsx` **บางมาก** — แค่ entry point ของ route
- โค้ดจริงอยู่ `web/momento/` ทั้งหมด (แยก concern ชัด)
- ทุก section import ผ่าน alias `@/...` (ดู `tsconfig.json` → `"@/*": ["./*"]`)
  เช่น `@/components/ui/button`, `@/lib/utils`, `@/web/momento/...`

---

## 4. การติดตั้งและรัน

```bash
npm install            # ติดตั้ง dependencies

npm run dev            # dev server → เปิด http://localhost:3000/momento
npm run build          # production build (เช็ค type + lint ครบ)
npm run lint           # ESLint
```

ดูข้อมูลโปรเจกต์ (framework, อะไรติดตั้งแล้ว) :

```bash
npx shadcn@latest info --json
```

> ⚠️ อย่ารัน `npm run build` ขณะ `npm run dev` กำลังรัน — มันเขียนทับโฟลเดอร์
> `.next` เดียวกัน ทำให้ dev server 500 (แก้: ปิด dev, `rm -rf .next`, รันใหม่)

---

## 5. กฎ/คอนเวนชันที่ต้องทำตาม (สรุปจาก DESIGN.md + SKILL.md)

| หัวข้อ | กฎ |
|---|---|
| สี | **semantic token เท่านั้น** — `bg-primary`, `text-muted-foreground` ห้ามสีดิบ `bg-blue-500` |
| ระยะห่าง | `gap-*` บน flex/grid — ห้าม `space-y-*` |
| ขนาดเท่ากัน | `size-10` — ไม่ใช่ `w-10 h-10` |
| className เงื่อนไข | ใช้ `cn()` จาก `@/lib/utils` |
| token/ธีม | แก้ใน `app/globals.css` เท่านั้น — **ห้ามสร้างไฟล์ CSS ใหม่** |
| component | เพิ่มด้วย `npx shadcn@latest add <name>` — ห้ามเขียน `components/ui/*` เอง |
| ไอคอน | ใช้ `lucide-react` (iconLibrary ของโปรเจกต์) |
| Dark mode | ใช้ semantic token (สลับเองผ่าน `.dark`) — ห้าม `dark:` ทับสีมือ |

อ่านเต็มได้ที่ **`DESIGN.md`** (สเปก tokens/typography/spacing/radius)
และ **`.claude/skills/shadcn-ui-tailwind-figma/SKILL.md`** (workflow Figma→code)

---

## 6. หมายเหตุเชิงการเรียนรู้ (ข้อจำกัดของงานชิ้นนี้)

1. **Brand tokens เป็น authorized deviation** — ดีไซน์ Momento ใช้พาเลตเขียว
   (ไลม์ + เขียวเข้ม) ซึ่งไม่ใช่ neutral kit เดิม จึงเพิ่ม `--primary`,
   `--brand`, `--brand-dark*` ในบล็อก "Brand overrides" ของ `globals.css`
   (ทั้ง `:root` และ `.dark` + ลงทะเบียนใน `@theme inline`)
2. **ค่าสี hex เป็นค่าประมาณจาก screenshot** — ตอนทำ Figma MCP ติด rate-limit
   (seat ที่ login ไม่ได้อยู่ใน plan ที่เป็นเจ้าของไฟล์ → โควต้า 6 ครั้ง/เดือน)
   ยังไม่ใช่ค่า 1:1 จาก `get_variable_defs` จริง — ถ้าปลด limit ควร re-sync
3. `dashboard-preview.tsx` และ `logo-strip.tsx` ทำให้ตรง screenshot ต้นฉบับ
   ที่ผู้สอนส่งให้ (โลโก้เป็นไฟล์จริงใน `public/clients/`)

---

_โครงสร้างคงเดิมตามที่ส่งมอบ — เอกสารนี้ใช้ประกอบการอ่านโค้ดเท่านั้น_
