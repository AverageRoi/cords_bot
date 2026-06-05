-- CreateTable
CREATE TABLE "cords" (
    "id" SERIAL NOT NULL,
    "guildId" TEXT NOT NULL,
    "x_coordinates" TEXT NOT NULL,
    "y_coordinates" TEXT,
    "z_coordinates" TEXT NOT NULL,
    "dimension" TEXT NOT NULL,

    CONSTRAINT "cords_pkey" PRIMARY KEY ("id")
);
