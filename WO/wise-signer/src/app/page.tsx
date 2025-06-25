import { FaShieldAlt, FaMicrochip, FaWallet } from "react-icons/fa";

export default function Home() {
  return (
    <div
      style={{ background: 'var(--background)', color: 'var(--foreground)' }}
      className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      {/* Hero Section */}
      <div className="text-center max-w-3xl mt-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Train Your Wallet Security Skills
        </h1>
        <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          Wise Signer challenges you to identify safe and dangerous wallet transactions
          before signing them. Master multi-sig and hardware wallet security in a
          safe environment.
        </p>
        <a
          href="/simulated/questions/1"
          style={{ background: 'var(--foreground)', color: 'var(--background)' }}
          className="px-8 py-3 rounded-lg text-lg font-medium hover:opacity-80 transition"
        >
          Start Training Now
        </a>
      </div>

      {/* How to Play Section */}
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-center">Choose Your Challenge Mode</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div style={{ background: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--foreground)' }} className="rounded-xl p-6 hover:border-green-500 transition">
            <div className="flex justify-center mb-4">
              <div style={{ background: 'rgba(16, 185, 129, 0.2)' }} className="p-3 rounded-full">
                <FaWallet size={28} style={{ color: 'var(--foreground)' }} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Simulated Wallet</h3>
            <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              A simplified experience without real network connections.
              Practice making sign/reject decisions in quick, focused challenges
              to build your transaction safety intuition.
            </p>
            <div className="mt-4 text-center">
              <a
                href="/simulated/questions/1"
                style={{ color: 'var(--foreground)' }}
                className="hover:opacity-80 font-medium"
              >
                Play Simulated Mode →
              </a>
            </div>
          </div>

          <div style={{ background: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--foreground)' }} className="rounded-xl p-6 relative overflow-hidden">
            {/* Full diagonal banner */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div style={{ background: 'var(--foreground)', color: 'var(--background)' }} className="font-medium py-2 text-center w-screen absolute rotate-12 shadow-md">
                Under Construction
              </div>
            </div>

            {/* Card content with reduced opacity */}
            <div className="relative z-0">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-600/20 p-3 rounded-full">
                  <FaMicrochip size={28} className="text-gray-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-400">Tenderly Virtualnet</h3>
              <p className="text-gray-500">
                We spin up a Tenderly virtual testnet (a remote fork) to create a realistic
                environment where you can practice with actual blockchain interactions without
                risking real assets.
              </p>
              <div className="mt-4 text-center">
                <span className="text-gray-500 font-medium cursor-not-allowed">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Why Train With Wise Signer?</h2>
        <p className="text-xl text-gray-300">
          Smart contract and wallet safety is critical in Web3. Wise Signer teaches you
          to recognize common attacks and deceptive transactions before they compromise
          your assets. Build confidence in managing multi-sig wallets and hardware wallets
          through hands-on practice.
        </p>
      </div>
    </div>
  );
}