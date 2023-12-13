-- CreateTable
CREATE TABLE "queues" (
    "id" TEXT NOT NULL,
    "created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "barberId" INTEGER NOT NULL,

    CONSTRAINT "queues_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "queues" ADD CONSTRAINT "queues_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
