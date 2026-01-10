'use client';

import Link from "next/link";
import { ArrowRight, Zap, Shield, Code, Globe, DollarSign, CheckCircle, Store } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">C</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">Cartee</span>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">BETA</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
              Dashboard
            </Link>
            <Link href="/faucet" className="hidden sm:inline text-gray-600 hover:text-gray-900 transition-colors">
              Faucet
            </Link>
            <a href="https://github.com/rizwanmoulvi/cartee-dashboard" target="_blank" rel="noopener noreferrer" className="hidden sm:inline text-gray-600 hover:text-gray-900 transition-colors">
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Powered by Ethereum</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Accept MNEE Stablecoin
            <br />
            <span className="text-blue-600">in Your E-Commerce Store</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Seamless cryptocurrency payments for WooCommerce and Shopify using MNEE stablecoin on Ethereum Sepolia testnet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/dashboard"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="https://github.com/rizwanmoulvi/cartee-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Code className="w-5 h-5" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600">Built for modern e-commerce with blockchain technology</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ethereum Network</h3>
              <p className="text-gray-600">
                Built on Ethereum blockchain with Sepolia testnet support for secure and reliable payment processing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">MNEE Stablecoin</h3>
              <p className="text-gray-600">
                ERC-20 stablecoin for predictable pricing and seamless integration with existing wallets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3>
              <p className="text-gray-600">
                ERC-20 token standard implementation with approve/transfer pattern for secure and transparent transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="container mx-auto px-6 py-20 bg-gray-50 rounded-3xl my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
            <p className="text-gray-600">Open-source solution for Web3 commerce</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">WooCommerce & Shopify Integration</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Automated order processing and status synchronization via webhooks
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">RainbowKit Wallet Connection</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Support for MetaMask, Coinbase Wallet, and WalletConnect
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Transaction Tracking</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    On-chain verification with Etherscan integration
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">PostgreSQL Order Management</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Prisma ORM for reliable order and payment tracking
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Tech Stack:</strong> Next.js 15, TypeScript, Wagmi, Viem, Prisma, PostgreSQL, TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Accept Crypto Payments?
          </h2>
          <p className="text-gray-600 mb-8">
            Start accepting MNEE stablecoin payments in your store today.
            <br />
            Test on Sepolia testnet before going live.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/dashboard"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Launch Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="https://sepolia.etherscan.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <span>View on Etherscan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200">
        <div className="text-center text-gray-600 text-sm">
          <p className="mb-2">
            Cartee - Cryptocurrency payment gateway for e-commerce
          </p>
          <p>
            Built with ❤️ for the Ethereum ecosystem | 
            <a href="https://github.com/rizwanmoulvi/cartee-dashboard" className="text-blue-600 hover:text-blue-700 ml-1">
              Open Source
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">W</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">WonWay</span>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">BETA</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
              {t.nav.dashboard}
            </Link>
            <Link href="/faucet" className="hidden sm:inline text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.faucet}
            </Link>
            <a href="https://github.com/nickmura/wonway" target="_blank" rel="noopener noreferrer" className="hidden sm:inline text-gray-600 hover:text-gray-900 transition-colors">
              {t.nav.github}
            </a>
            <button
              onClick={() => setLanguage(language === 'en' ? 'ko' : 'en')}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'KO' : 'EN'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title1}
            <br />
            <span className="text-blue-600">{t.hero.title2}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://woocommerce.wonway.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
            >
              <Store className="w-5 h-5" />
              <span>Try WooCommerce Store</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="https://kaia-commerce.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors"
            >
              <Store className="w-5 h-5" />
              <span>{t.hero.visitStore}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/nickmura/kaia-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Code className="w-5 h-5" />
              <span>{t.hero.viewSource}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
            <p className="text-gray-600">{t.features.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.features.kaia.title}</h3>
              <p className="text-gray-600">
                {t.features.kaia.description}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.features.krw.title}</h3>
              <p className="text-gray-600">
                {t.features.krw.description}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.features.smart.title}</h3>
              <p className="text-gray-600">
                {t.features.smart.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="container mx-auto px-6 py-20 bg-gray-50 rounded-3xl my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.tech.title}</h2>
            <p className="text-gray-600">{t.tech.subtitle}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.tech.shopify.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {t.tech.shopify.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.tech.rainbow.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {t.tech.rainbow.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.tech.tracking.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {t.tech.tracking.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.tech.database.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {t.tech.database.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>{t.tech.stack}</strong> Next.js 15, TypeScript, Wagmi, Viem, Prisma, PostgreSQL, TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.cta.title}
          </h2>
          <p className="text-gray-600 mb-8">
            {t.cta.description1}
            <br />
            {t.cta.description2}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href={`/pay?lang=${language}`}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>{t.cta.launch}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="https://kairos.kaiascan.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <span>{t.cta.viewExplorer}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200">
        <div className="text-center text-gray-600 text-sm">
          <p className="mb-2">
            {t.footer.tagline}
          </p>
          <p>
            {t.footer.built} | 
            <a href="https://github.com/nickmura/kaia-commerce" className="text-blue-600 hover:text-blue-700 ml-1">
              {t.footer.opensource}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}