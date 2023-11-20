/*
  Warnings:

  - Added the required column `idDono` to the `Leilao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "dataLimite" DATETIME NOT NULL,
    "idDono" TEXT NOT NULL,
    "listaDeLances" TEXT NOT NULL,
    CONSTRAINT "Leilao_idDono_fkey" FOREIGN KEY ("idDono") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("dataLimite", "id", "listaDeLances", "preco", "produto") SELECT "dataLimite", "id", "listaDeLances", "preco", "produto" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
