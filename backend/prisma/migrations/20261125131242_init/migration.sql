-- CreateTable
CREATE TABLE "latihan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "set" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "latihan_pkey" PRIMARY KEY ("id")
);
