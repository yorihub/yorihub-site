import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ヨリハブについて",
  description:
    "ヨリハブは、住まいに関する相談受付・案内を行うブランドです。事業の目的・運営方針・対応範囲についてご説明します。",
};

export default function AboutPage() {
  return (
    <div className="py-14 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
            About
          </p>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            ヨリハブについて
          </h1>
          <p className="text-slate-600 leading-relaxed">
            ヨリハブは、住まいに関する相談を受け付け、内容を整理したうえで適切な案内・提携先の紹介を行うブランドです。
            集客を目的とした広告サービスではなく、説明責任と信頼形成を重視した事業案内を提供することを目指しています。
          </p>
        </div>

        {/* 目的と背景 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            運営の目的
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            住まいに関するサービスは、専門知識の差や情報の非対称性により、依頼者が不安を抱えやすい分野です。
            ヨリハブは、その課題に対して「まず相談できる、中立的な窓口」として機能することを目的として運営されています。
          </p>
          <p className="text-slate-700 leading-relaxed">
            特定の施工会社や業者に偏った案内をするのではなく、ご相談の内容を整理したうえで、
            状況に合った情報・選択肢を提供することを大切にしています。
          </p>
        </section>

        {/* ヨリハブの立場 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            ヨリハブの立場について
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ヨリハブは、住まいに関するサービスを直接提供する施工会社・工事業者ではありません。
            事業によっては「相談受付・案内・提携先紹介・一次受付」の立場で関わります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-semibold text-slate-700 mb-3 text-sm">
              ヨリハブが担う主な役割
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                "住まいに関するご相談の受付・一次確認",
                "相談内容の整理・状況把握",
                "事業ごとの対応範囲に沿った案内",
                "必要に応じた提携先専門事業者の紹介",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-slate-500 bg-amber-50 border border-amber-200 rounded p-4">
            ※ 実際の現地確認・見積作成・施工・設置作業は、提携先の専門事業者が担当します。
            事業ごとに役割が異なる場合がありますので、各事業ページをご確認ください。
          </p>
        </section>

        {/* 運営方針 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            運営方針
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "事実ベースでの案内",
                desc: "根拠のない主張・誇大な表現・「最安」「No.1」などの表現は使いません。確認できる情報に基づいて案内します。",
              },
              {
                title: "役割範囲の明示",
                desc: "ヨリハブが担う範囲と、提携先事業者が担う範囲を明確に区別して伝えます。",
              },
              {
                title: "重要事項の事前確認",
                desc: "費用・工程・関係者などの重要事項は、手続きが進む前に確認できるよう努めます。",
              },
              {
                title: "売り込みよりも説明責任",
                desc: "問い合わせへの対応は、契約や購入を急かすものではなく、状況の整理と適切な情報提供を優先します。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[#1e3a5f] pl-4"
              >
                <h3 className="font-semibold text-slate-800 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 将来展望 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            今後の展開について
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            現時点では窓ガラスの修理・交換を主な対応領域としています。
            今後は、住まいに関するさまざまな分野（水まわり・リフォーム・その他住宅関連など）へと
            対応を拡張していく予定です。
          </p>
          <p className="text-slate-700 leading-relaxed">
            新たな対応領域を追加する際は、各事業ページを通じてご案内します。
          </p>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200">
          <Link
            href="/services"
            className="inline-block bg-[#1e3a5f] text-white font-medium px-6 py-3 rounded text-sm hover:bg-[#16304f] transition-colors text-center"
          >
            事業一覧を見る
          </Link>
          <Link
            href="/operator"
            className="inline-block border border-slate-300 text-slate-700 font-medium px-6 py-3 rounded text-sm hover:bg-slate-50 transition-colors text-center"
          >
            運営者情報
          </Link>
        </div>
      </div>
    </div>
  );
}
