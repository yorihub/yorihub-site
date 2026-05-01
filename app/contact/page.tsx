import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "お問い合わせ | ヨリハブ",
  description:
    "ヨリハブへの事業内容の確認・提携のご相談・その他のご連絡はこちらからお問い合わせください。",
};

export default function ContactPage() {
  return (
    <div className="py-14 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
            Contact
          </p>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            お問い合わせ
          </h1>
          <p className="text-slate-600 leading-relaxed">
            ヨリハブの事業内容・提携・その他のご連絡については、こちらからお問い合わせください。
            内容を確認したうえで、折り返しご連絡いたします。
          </p>

        </div>

        {/* 連絡方法 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            連絡方法
          </h2>
          <div className="space-y-4">
            {/* 電話 */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">
                お電話でのお問い合わせ
              </h3>
              <p className="text-xl font-bold text-[#1e3a5f] tracking-wide">
                {siteConfig.phone}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                お問い合わせの内容・目的を簡単にお伝えいただけると、スムーズに対応できます。
              </p>
            </div>

            {/* メール（確定後 siteConfig.contactEmail に入力すると表示されます） */}
            {siteConfig.contactEmail && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">
                  メールでのお問い合わせ
                </h3>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm font-medium text-[#1e3a5f] hover:underline break-all"
                >
                  {siteConfig.contactEmail}
                </a>
                <p className="text-xs text-slate-500 mt-2">
                  件名にお問い合わせの種別（提携・事業内容の確認・その他）をご記載いただけると、スムーズに対応できます。
                </p>
              </div>
            )}
          </div>
        </section>

        {/* お問い合わせの際のお願い */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            お問い合わせの際のお願い
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            {[
              "ご連絡の内容・目的をできるだけ具体的にお知らせください。",
              "提携・事業内容の確認・その他のご連絡など、内容を確認したうえで返信します。",
              "返信までにお時間をいただく場合があります。あらかじめご了承ください。",
              "内容によっては、対応できない場合や別の窓口をご案内する場合があります。",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 text-[#1e3a5f] mt-0.5 font-bold">・</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 対応について */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            対応について
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            {siteConfig.contactHours}
          </p>
          <p className="text-xs text-slate-500 mt-2">
            ※ 内容により、ご返答までにお時間をいただく場合があります。
          </p>
        </section>

        {/* 注意書き */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-2">ご注意</p>
          <p>
            ヨリハブは施工会社ではありません。相談受付・内容整理・案内・提携先紹介を担う窓口として運営しています。
            実際の現地確認・見積・施工は提携先事業者が担当します。
          </p>
        </div>

        {/* Links */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
          <Link
            href="/partners"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            提携についての詳細はこちら →
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            プライバシーポリシーを確認する →
          </Link>
        </div>
      </div>
    </div>
  );
}
