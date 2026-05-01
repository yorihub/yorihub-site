import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "運営者情報 | ヨリハブ",
  description:
    "ヨリハブの運営者情報です。屋号・所在地・連絡先・事業内容などを掲載しています。",
};

export default function OperatorPage() {
  const baseRows = [
    {
      label: "屋号 / ブランド名",
      value: `${siteConfig.brandName}（${siteConfig.brandNameEn}）`,
    },
    // 運営者名は確定後に siteConfig.operatorName へ入力すると自動表示されます
    ...(siteConfig.operatorName
      ? [{ label: "運営者名", value: siteConfig.operatorName }]
      : []),
    {
      label: "所在地",
      value: siteConfig.address,
      note: "登記・住所利用専用のバーチャルオフィスのため、来店対応は行っておりません。",
    },
    {
      label: "連絡先",
      value: `電話：${siteConfig.phone}`,
    },
    // メールアドレスは確定後に siteConfig.contactEmail へ入力すると自動表示されます
    ...(siteConfig.contactEmail
      ? [{ label: "メール", value: siteConfig.contactEmail }]
      : []),
    {
      label: "運営形態",
      value: "個人事業として運営",
    },
    {
      label: "事業内容",
      value: siteConfig.businessDescription,
    },
    {
      label: "対応について",
      value: siteConfig.contactHours,
    },
  ];

  return (
    <div className="py-14 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
            Operator
          </p>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">運営者情報</h1>
          <p className="text-slate-600 leading-relaxed">
            ヨリハブを運営している事業者の基本情報を掲載しています。
          </p>
        </div>

        {/* 基本情報テーブル */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            基本情報
          </h2>
          <div className="divide-y divide-slate-100">
            {baseRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col sm:flex-row py-4 gap-2 sm:gap-6"
              >
                <dt className="shrink-0 w-full sm:w-36 text-sm font-medium text-slate-500">
                  {row.label}
                </dt>
                <dd className="text-sm leading-relaxed text-slate-700">
                  {row.value}
                  {"note" in row && row.note && (
                    <p className="text-xs text-slate-500 mt-1">※{row.note}</p>
                  )}
                </dd>
              </div>
            ))}
          </div>
        </section>

        {/* 補足事項 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            補足事項
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              ヨリハブは現在、個人事業として運営されています。
              相談受付・内容整理・提携先案内を中心に事業を行っており、
              対応領域は今後段階的に拡張していく予定です。
            </p>
            <p>
              いただいたお問い合わせは内容を確認のうえで返信します。
              内容により、お時間をいただく場合があります。
            </p>
            <p>
              提携先事業者への案内・引き継ぎを行う場合は、
              事前にその旨をお伝えしたうえで進めます。
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-block bg-[#1e3a5f] text-white font-medium px-6 py-3 rounded text-sm hover:bg-[#16304f] transition-colors text-center"
          >
            お問い合わせ
          </Link>
          <Link
            href="/about"
            className="inline-block border border-slate-300 text-slate-700 font-medium px-6 py-3 rounded text-sm hover:bg-slate-50 transition-colors text-center"
          >
            ヨリハブについて
          </Link>
        </div>
      </div>
    </div>
  );
}
