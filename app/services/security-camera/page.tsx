import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "防犯関連 | ヨリハブ",
  description:
    "ヨリハブは防犯カメラ・住まいの防犯対策について相談受付・内容整理・案内を行う窓口です。現地確認・見積・設置工事などの実務は提携先事業者が担当します。",
};

export default function SecurityCameraPage() {
  return (
    <div className="py-14 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6" aria-label="パンくずリスト">
          <Link href="/services" className="hover:text-slate-600 transition-colors">
            事業一覧
          </Link>
          <span className="mx-2">›</span>
          <span className="text-slate-600">防犯関連</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
            Security
          </p>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">防犯関連</h1>
          <p className="text-slate-600 leading-relaxed">
            ヨリハブは、防犯カメラや住まいの防犯対策について相談受付・内容整理・案内を行う窓口です。
            現地確認、見積、設置工事などの実務は、提携先事業者が担当します。
          </p>
        </div>

        {/* 役割の明示 - 最重要 */}
        <section className="mb-12">
          <div className="bg-[#ebf3fa] border border-[#1e3a5f]/20 rounded-lg p-6">
            <h2 className="text-base font-bold text-[#1e3a5f] mb-4">
              役割分担について
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-[#1e3a5f] mb-2">
                  ヨリハブが担当すること
                </p>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {[
                    "ご相談の受付・一次対応",
                    "ご要望・状況の内容整理",
                    "対応可能な案内の提供",
                    "提携先事業者へのつなぎ・紹介",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#1e3a5f] shrink-0 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  提携先事業者が担当すること
                </p>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {[
                    "現地確認・現場調査",
                    "機器の選定・提案",
                    "見積の作成・提示",
                    "実際の設置工事・施工",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-slate-400 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 相談できること */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            ご相談できる内容
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            以下のようなご相談をお受けしています。まずは状況をお聞かせください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "防犯カメラの設置を検討している",
                desc: "自宅・事業所・駐車場など、どこにどのようなカメラが必要かを整理するお手伝いをします。",
              },
              {
                title: "どんな対策が必要かわからない",
                desc: "現状のご不安や状況をお聞きし、一般的な対策の概要をお伝えします。",
              },
              {
                title: "業者の選び方・進め方を知りたい",
                desc: "施工会社への依頼の流れや、確認すべき点について案内します。",
              },
              {
                title: "見積を取りたいが何社に聞けばよいかわからない",
                desc: "提携先の事業者をご紹介できる場合があります。詳細はお問い合わせください。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-100 rounded-lg p-4"
              >
                <h3 className="font-semibold text-slate-800 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対応の流れ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            ご相談から案内までの流れ（概要）
          </h2>
          <p className="text-xs text-slate-500 mb-5">
            ※ 以下はヨリハブが関与する範囲の一般的な流れです。提携先事業者の対応フローは各事業者によります。
          </p>
          <ol className="space-y-5">
            {[
              {
                step: "1",
                title: "お問い合わせ",
                desc: "お問い合わせページよりご連絡ください。状況・ご要望をお知らせください。",
              },
              {
                step: "2",
                title: "内容確認・折り返し",
                desc: "いただいた内容を確認し、必要に応じて追加のご確認をさせていただきます。",
              },
              {
                step: "3",
                title: "案内・紹介",
                desc: "状況に応じて、対応可能な内容をお伝えします。提携先事業者のご紹介が適切な場合はその旨をお伝えします。",
              },
              {
                step: "4",
                title: "提携先とのやり取り",
                desc: "提携先事業者への引き継ぎ後は、現地確認・見積・施工の対応は提携先が担当します。",
              },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#1e3a5f] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 案内時の姿勢 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            案内時に大切にしていること
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "誇大な表現を使いません",
                desc: "「絶対安全」「完全対応」などの表現は使いません。できること・できないことを正直にお伝えします。",
              },
              {
                title: "費用の見通しは提携先から",
                desc: "ヨリハブが具体的な費用を提示することはありません。費用・見積は提携先事業者から正式にご提示します。",
              },
              {
                title: "急かしません",
                desc: "ご検討のペースに合わせて対応します。無理な契約を促すことはありません。",
              },
              {
                title: "役割の境界を明確に",
                desc: "ヨリハブの対応範囲と提携先の対応範囲を事前にお伝えします。曖昧な状態で手続きを進めません。",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#1e3a5f] pl-4">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 主CTA：防犯カメラLP（siteConfig.lpUrls.securityCamera にURLを設定すると表示されます） */}
        {siteConfig.lpUrls.securityCamera && (
          <section className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
            <h2 className="text-base font-bold text-slate-800 mb-3">
              防犯カメラの相談をご希望の方へ
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              防犯カメラの設置や見直しをご検討中の方は、専用の案内ページをご確認ください。
              ご相談の流れや対象内容を確認したうえで、必要に応じてご利用いただけます。
            </p>
            <a
              href={siteConfig.lpUrls.securityCamera}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a5f] text-white font-medium px-6 py-3 rounded text-sm hover:bg-[#16304f] transition-colors"
            >
              防犯カメラの案内ページを見る
            </a>
          </section>
        )}

        {/* 補助導線：事業内容・提携は本体contactへ */}
        <p className="text-xs text-slate-500 mb-10">
          事業内容・提携に関するお問い合わせは、
          <Link href="/contact" className="underline hover:text-slate-700 transition-colors">
            お問い合わせページ
          </Link>
          をご利用ください。
        </p>

        {/* Back */}
        <div className="pt-4 border-t border-slate-100">
          <Link
            href="/services"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            ← 事業一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
