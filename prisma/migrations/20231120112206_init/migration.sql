/*
  Warnings:

  - Added the required column `valor` to the `Lance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Leilao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUsuario" TEXT NOT NULL,
    "idLeilao" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    CONSTRAINT "Lance_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_idLeilao_fkey" FOREIGN KEY ("idLeilao") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lance" ("id", "idLeilao", "idUsuario") SELECT "id", "idLeilao", "idUsuario" FROM "Lance";
DROP TABLE "Lance";
ALTER TABLE "new_Lance" RENAME TO "Lance";
CREATE TABLE "new_Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "dataLimite" DATETIME NOT NULL,
    "listaDeLances" TEXT NOT NULL
);
INSERT INTO "new_Leilao" ("dataLimite", "id", "listaDeLances", "produto") SELECT "dataLimite", "id", "listaDeLances", "produto" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
