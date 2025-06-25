import { useNetwork } from "@/components/NetworkContext"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "./ThemeContext"

// Dynamically import ConnectButton with no SSR to avoid errors
const ConnectButton = dynamic(
  () => import("@rainbow-me/rainbowkit").then((mod) => mod.ConnectButton),
  { ssr: false }
)

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const { networkInfo, isLoading } = useNetwork()
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()

  const pathname = usePathname()
  const isTenderlyQuestionsPage =
    pathname?.startsWith("/tenderly/questions") || false

  useEffect(() => {
    setMounted(true)
  }, [])

  // This will always be false for now
  const showConnectButton =
    mounted && !isLoading && !!networkInfo && isTenderlyQuestionsPage && false // Add false to disable it

  const handlePlayNowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.clientX > e.currentTarget.getBoundingClientRect().right - 30)) {
      window.location.href = "/simulated/questions/1"
    }
  }

  // Prevent rendering differences between server and client
  if (!mounted) {
    return (
      <nav
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
          borderBottom: "1px solid var(--foreground)",
        }}
        className="px-8 py-2 flex flex-row justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <div style={{ width: "50px", height: "50px" }} />{" "}
          {/* Placeholder for Image */}
        </div>
        <button
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
            border: "1px solid var(--foreground)",
          }}
          className="ml-4 px-3 py-1 rounded transition"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>
    )
  }

  return (
    <nav
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderBottom: "1px solid var(--foreground)",
      }}
      className="px-8 py-2 flex flex-row justify-between items-center"
    >
      <div className="flex items-center gap-3">
        <Image src="/cyfrin.svg" alt="Logo" width={50} height={50} />
        <Link
          href="/"
          className="text-xl font-semibold text-white hover:text-gray-300 transition"
        >
          Wise Signer
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {/* Tools Link */}
        <Link
          href="/tools"
          className="text-white hover:text-gray-300 transition"
        >
          Tools
        </Link>

        {/* Only render ConnectButton wrapper when needed */}
        {showConnectButton && (
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <ConnectButton
                showBalance={false}
                accountStatus={{
                  smallScreen: "avatar",
                  largeScreen: "full",
                }}
                chainStatus={{
                  smallScreen: "icon",
                  largeScreen: "full",
                }}
              />
            </div>
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onMouseUp={handlePlayNowClick}
            className="cursor-pointer flex items-center gap-1 px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition"
          >
            Play Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link
                href="/simulated/questions/1"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
              >
                Simulated Wallet
              </Link>
              <div
                className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                Tenderly Virtualnet
                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-1 rounded">
                  Under Construction
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        aria-label="Toggle dark mode"
        onClick={toggleTheme}
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid var(--foreground)",
        }}
        className="ml-4 px-3 py-1 rounded transition"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  )
}

export default Header
