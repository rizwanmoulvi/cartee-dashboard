# Cartee - Cryptocurrency Payment Gateway

## Inspiration

We've been watching the gap between Web3 and e-commerce grow wider every year. Merchants want to accept crypto, but the existing solutions are either too complicated, take huge fees, or require customers to go through clunky third-party processors. We thought: what if paying with crypto could be as simple as connecting your wallet and clicking approve? No middlemen, no complicated setup, just direct wallet-to-wallet transfers with automatic order confirmation.

The other problem we kept seeing was platform lock-in. Why should a payment gateway only work for Shopify OR WooCommerce? Merchants use different platforms for different stores. Cartee works with both, using the same merchant account.

## What it does

Cartee lets online merchants accept MNEE stablecoin payments on their WooCommerce and Shopify stores. Here's the flow:

1. Customer adds items to cart and chooses "MNEE Token Payment" at checkout
2. They get a payment link that opens our dashboard
3. Connect any Web3 wallet (MetaMask, WalletConnect, Coinbase Wallet, etc.)
4. Approve the MNEE token spend and send payment
5. Our blockchain listener detects the transfer in real-time
6. Order status updates automatically to "paid" in the store
7. Merchant gets notified, ships product

For merchants, setup takes 5 minutes. Install our WordPress plugin or add our webhook to Shopify, paste your API key, and you're accepting crypto payments. No KYC, no bank accounts, no payment processor fees. Just a small gas fee that the customer pays.

The system works on Ethereum Sepolia testnet right now (it's a demo/MVP), but the architecture is ready for mainnet deployment with any ERC-20 token.

## How we built it

**Frontend & Dashboard:**
- Next.js 15 with React 19 and App Router for the merchant dashboard and payment pages
- RainbowKit for wallet connections (supports 300+ wallets)
- wagmi and viem for blockchain interactions
- Tailwind CSS for styling
- Deployed on Vercel with automatic deployments from GitHub

**Backend & Database:**
- Prisma ORM with PostgreSQL (hosted on Supabase)
- RESTful API routes for merchant auth, order creation, and webhooks
- Blockchain listener service built with ethers.js that monitors transfers via WebSocket

**WooCommerce Integration:**
- Custom PHP payment gateway plugin
- Hooks into WooCommerce checkout and order management
- Adds payment links to order emails automatically

**Shopify Integration:**
- Custom webhook endpoint (Shopify doesn't allow custom payment plugins)
- Uses manual payment method + automatic payment link injection
- Updates order notes and status via Shopify Admin API

**Smart Contracts:**
- TestMNEE token on Sepolia with public mint function and 1-hour cooldown
- Built with OpenZeppelin contracts for security
- Includes faucet for developers to get test tokens

**Tools & Services:**
- Alchemy for Ethereum RPC (WebSocket for real-time transfer monitoring)
- Git for version control
- Node.js runtime

## Challenges we ran into

**Shopify's Payment Restrictions:** Unlike WooCommerce, Shopify doesn't let you add custom payment gateways unless you become an official Shopify Plus partner (expensive and takes months). We had to get creative with webhooks and manual payment methods. The payment link gets injected into order notes automatically, but it's not as clean as the WooCommerce flow.

**WooCommerce Gateway ID Casing:** Spent hours debugging why the settings page was empty. Turned out WooCommerce requires lowercase gateway IDs, but we used uppercase initially. The system was saving settings under a different option name than it was reading from. Added backwards compatibility so existing installations don't break.

**Real-time Order Updates:** Getting the blockchain listener to properly update database records while handling edge cases (reorgs, duplicate events, failed transactions) took multiple iterations. We eventually settled on checking for both Transfer events AND database state before updating orders.

**Alchemy Rate Limits:** During testing, we hit rate limits on the approve() transaction. Not a real rate limit, just network timing issues, but it confused us at first. Added better error handling and retry logic.

**Email Template Complexity:** Shopify's Liquid template system is powerful but weird. Getting the MNEE payment box to render properly across different email clients while maintaining the existing template structure was tedious.

## Accomplishments that we're proud of

**It Actually Works:** We did a complete end-to-end test payment. Added product to cart, checked out, connected wallet, approved tokens, sent payment, and watched the order status update automatically. No manual intervention needed. That moment when the blockchain listener detected our payment and updated the database felt amazing.

**Multi-Platform Support:** Most crypto payment gateways pick one platform. We support both WooCommerce and Shopify with the same backend. Merchants can run multiple stores on different platforms, all managed from one dashboard.

**Developer Experience:** Our faucet makes testing dead simple. Developers can get test MNEE tokens without jumping through hoops. The WooCommerce plugin installs like any other plugin. The documentation is clear. We built the system we'd want to use.

**No Custody:** Unlike Coinbase Commerce or BitPay, we never touch merchant funds. Payments go directly from customer wallet to merchant wallet. Cartee just watches the blockchain and updates order status. This means no KYC, no frozen accounts, no "sorry your funds are under review."

**Clean Codebase:** The code is organized, uses modern patterns, and has proper error handling. We can hand this off to another developer and they'll understand it. TypeScript types everywhere, Prisma schema is well-defined, components are reusable.

## What we learned

**Blockchain Integration is Harder Than It Looks:** Reading from the blockchain is easy. Watching for events in real-time while handling reorgs, duplicate events, and network issues is complex. ethers.js helps, but you still need to think through every edge case.

**Platform Limitations Shape Your Architecture:** We designed for WooCommerce first, then realized Shopify's restrictions meant we needed a completely different approach. Now we know to research platform limitations before building.

**Gas Fees Matter for UX:** On mainnet, users would need to pay gas for both approve() and transfer() transactions. That's two MetaMask popups, two confirmations, two gas fees. Future versions should use permit() signatures to batch these into one transaction.

**Developer Tools Make or Break Adoption:** Our faucet, clear error messages, and simple setup process are why people can actually use this. The core tech is only half the battle.

**WebSockets Beat Polling:** Our first version polled the blockchain every 10 seconds. Switching to WebSocket connections made order updates instant and reduced RPC costs by 80%.

## What's next for Cartee

**Mainnet Deployment:** Move from Sepolia testnet to Ethereum mainnet with real stablecoins (USDC, DAI, USDT). Add support for Polygon, Arbitrum, and Optimism for lower gas fees.

**Multi-Token Support:** Let merchants choose which tokens to accept. Some might want USDC, others want ETH or custom tokens. The merchant dashboard should show a token selector.

**Automatic Price Conversion:** Right now merchants set prices in USD but customers pay the USD-equivalent in MNEE. We need live exchange rates and automatic conversion so displayed prices match blockchain amounts.

**Shopify App Store Listing:** Apply to become an official Shopify app partner so we can offer a proper checkout integration instead of webhooks. This requires security audits and meeting Shopify's partner criteria.

**Recurring Payments:** Subscription support using EIP-2612 permits and automated token pulls. Perfect for SaaS products and membership sites.

**Merchant Analytics:** Dashboard showing payment volume, popular products, customer wallet analysis, and revenue charts. Help merchants understand their crypto customers.

**Refund System:** Add a refund flow where merchants can send tokens back to customers directly from the dashboard. Include partial refunds and refund reasons.

**Mobile Wallet Deep Links:** Detect mobile users and open MetaMask/Trust Wallet apps directly instead of showing QR codes. Better UX on phones.

**Deploy Blockchain Listener to Cloud:** Move the listener from local development to Railway or Render so it runs 24/7 without us needing to keep a terminal open.

**WooCommerce Blocks Support:** Full compatibility with WooCommerce's new block-based checkout (we have basic support, but it needs polish).

**Multi-Sig Support:** Let merchants use Gnosis Safe or other multi-sig wallets for receiving payments. Enterprise customers need this.

**Invoice Generation:** Automatic PDF invoices emailed to customers after payment confirmation. Some merchants need this for B2B sales.

The goal is to make Cartee the Stripe of crypto payments - simple, reliable, and trusted by merchants worldwide.
