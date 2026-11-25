# Log Latihan Beban Harian

Aplikasi web untuk mencatat latihan beban harian: nama gerakan, target otot,
dan jumlah set, dengan statistik total set. Frontend React + Vite, backend
NestJS REST API, data disimpan di PostgreSQL melalui Prisma ORM.

## Cara menjalankan
1. Buat database PostgreSQL `log_latihan`
2. `cd backend && cp .env.example .env` (isi password)
3. `npm install && npx prisma migrate dev && npx prisma generate`
4. `npm run start:dev`
5. `cd frontend && npm install && npm run dev`

## Endpoint
GET/POST /latihan · GET/PATCH/DELETE /latihan/:id · GET /latihan?target= · GET /latihan/statistik

## Screenshot
![Migrasi](docs/screenshots/3.2-Outputterminalmigratedev.png)
... (SS-01 sampai SS-13)
