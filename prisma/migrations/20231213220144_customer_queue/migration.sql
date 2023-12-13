-- CreateTable
CREATE TABLE "customerQueue" (
    "id" SERIAL NOT NULL,
    "queueId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "isAwaiting" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "customerQueue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "customerQueue" ADD CONSTRAINT "customerQueue_queueId_fkey" FOREIGN KEY ("queueId") REFERENCES "queues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
