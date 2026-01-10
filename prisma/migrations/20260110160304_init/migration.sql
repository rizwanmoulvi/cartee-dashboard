-- CreateTable
CREATE TABLE "merchants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "walletAddress" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Unnamed Merchant',
    "email" TEXT,
    "apiKey" TEXT NOT NULL,
    "wooCommerceEnabled" BOOLEAN NOT NULL DEFAULT false,
    "wooCommerceSiteURL" TEXT,
    "shopifyAccessToken" TEXT,
    "shopifyShopDomain" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "orders" (
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

-- CreateIndex
CREATE UNIQUE INDEX "merchants_walletAddress_key" ON "merchants"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "merchants_apiKey_key" ON "merchants"("apiKey");
