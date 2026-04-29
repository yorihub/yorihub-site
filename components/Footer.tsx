import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-slate-300 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-white font-semibold text-lg mb-2">ヨリハブ</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              住まいに関する相談受付・案内を行うブランドです。
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">ページ一覧</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  トップ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  ヨリハブについて
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  事業一覧
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  提携について
                </Link>
              </li>
              <li>
                <Link href="/operator" className="hover:text-white transition-colors">
                  運営者情報
                </Link>
              </li>
            </ul>
          </div>

          {/* Sub Links */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">その他</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-sm text-slate-500">
          <p>© {currentYear} ヨリハブ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
