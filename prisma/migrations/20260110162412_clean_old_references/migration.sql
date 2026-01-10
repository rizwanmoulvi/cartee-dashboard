-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "totalAmount" REAL NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'MNEE',
    "networkFee" REAL NOT NULL DEFAULT 0.02,
    "customerEmail" TEXT,
    "customerWallet" TEXT,
    "paymentMethod" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "paidAt" DATETIME,
    "expiresAt" DATETIME,
    "approveHash" TEXT,
    "blockNumber" INTEGER,
    "fromAddress" TEXT,
    "gasUsed" TEXT,
    "merchantName" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "toAddress" TEXT,
    "tokenAddress" TEXT,
    "transferHash" TEXT,
    "refundTransferHash" TEXT,
    "refundedAt" DATETIME,
    "type" TEXT NOT NULL DEFAULT 'DIRECT',
    "orderConfirmation" TEXT,
    "adminGraphqlApiId" TEXT,
    "shopDomain" TEXT,
    "merchantWallet" TEXT,
    "merchantId" TEXT,
    "network" TEXT NOT NULL DEFAULT 'ethereum',
    "confirmations" INTEGER,
    CONSTRAINT "orders_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "merchants" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("adminGraphqlApiId", "approveHash", "blockNumber", "confirmations", "createdAt", "currency", "customerEmail", "customerWallet", "expiresAt", "fromAddress", "gasUsed", "id", "merchantId", "merchantName", "merchantWallet", "network", "networkFee", "orderConfirmation", "paidAt", "paymentMethod", "productName", "refundTransferHash", "refundedAt", "shopDomain", "status", "toAddress", "tokenAddress", "totalAmount", "transferHash", "type", "updatedAt") SELECT "adminGraphqlApiId", "approveHash", "blockNumber", "confirmations", "createdAt", "currency", "customerEmail", "customerWallet", "expiresAt", "fromAddress", "gasUsed", "id", "merchantId", "merchantName", "merchantWallet", "network", "networkFee", "orderConfirmation", "paidAt", "paymentMethod", "productName", "refundTransferHash", "refundedAt", "shopDomain", "status", "toAddress", "tokenAddress", "totalAmount", "transferHash", "type", "updatedAt" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
