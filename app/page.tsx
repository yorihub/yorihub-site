import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ヨリハブ – 住まいに関する相談受付・案内窓口",
  description:
    "ヨリハブは、窓ガラスの修理・交換に関するご相談を受け付け、東京23区の提携業者をご紹介する紹介型プラットフォームです。出張費・お見積もりは0円。年中無休 9:00〜21:00受付。",
};

const faqs = [
  {
    q: "ヨリハブは施工会社ですか？",
    a: "いいえ、ヨリハブは施工会社ではありません。相談の受付・内容整理・案内・提携先事業者の紹介を行う窓口として機能しています。実際の現地確認・見積・施工は提携先の専門事業者が担当します。",
  },
  {
    q: "相談後はどう進みますか？",
    a: "ご相談内容を確認したうえで、状況に応じた案内をお伝えします。事業ごとに対応フローが異なりますので、詳細は各事業ページをご確認ください。",
  },
  {
    q: "見積や現地対応は誰が行いますか？",
    a: "現地確認・見積・施工などは、提携先の専門事業者が担当します。ヨリハブが直接現地対応を行うケースは原則ありません。",
  },
  {
    q: "対応内容はどこで確認できますか？",
    a: "事業一覧ページおよび各事業の詳細ページに、ヨリハブの役割・提携先の役割・対応範囲を記載しています。ご確認のうえ、不明点はお問い合わせください。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-blue-200 mb-3 tracking-widest uppercase">
            Yorihub
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-5">
            住まいに関する相談を受け付け、
            <br className="hidden sm:block" />
            整理・案内を行う窓口です。
          </h1>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-8 max-w-xl">
            窓ガラスの修理・交換に関するご相談をお聞きし、東京23区の提携業者へおつなぎしています。
            出張費・お見積もりは無料、年中無休 9:00〜21:00で受付中です。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/services"
              className="inline-block bg-white text-[#1e3a5f] font-semibold px-6 py-3 rounded text-sm hover:bg-blue-50 transition-colors text-center"
            >
              事業一覧を見る
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white text-white font-medium px-6 py-3 rounded text-sm hover:bg-white/10 transition-colors text-center"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: ヨリハブが行っていること */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            ヨリハブが行っていること
          </h2>
          <p className="text-slate-500 text-sm mb-8 border-b border-slate-200 pb-6">
            ヨリハブは、お客様と専門事業者をつなぐ中間的な役割を担います。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "相談の受付",
                desc: "住まいに関するお困りごとや疑問を受け付けます。まずは気軽にご連絡ください。",
              },
              {
                title: "内容の整理",
                desc: "いただいたご相談の内容を整理し、状況を確認します。",
              },
              {
                title: "事業に応じた案内",
                desc: "事業ごとの対応範囲に沿って、適切な案内をお伝えします。",
              },
              {
                title: "提携先の紹介",
                desc: "必要に応じて、対応可能な提携先事業者をご紹介します。自社施工ではないケースがあります。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-lg p-5 border border-slate-100"
              >
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600 bg-amber-50 border border-amber-200 rounded p-4">
            ※ ヨリハブは施工会社ではありません。事業によっては、実際の現地対応・見積・施工は提携先事業者が担当します。
          </p>
        </div>
      </section>

      {/* Section 2: 対応領域 */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            現在の主な対応領域
          </h2>
          <p className="text-slate-500 text-sm mb-8 border-b border-slate-200 pb-6">
            現時点では窓ガラスの修理・交換を中心に対応しています。今後、住まい関連の分野を段階的に拡張していく予定です。
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-slate-200 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">窓ガラスの修理・交換</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    窓ガラスの修理・交換に関するご相談を受け付け、東京23区の提携業者をご紹介します。出張費・お見積もりは0円です。
                  </p>
                </div>
                <a
                  href="/glass-repair/"
                  className="shrink-0 text-sm font-medium text-[#1e3a5f] hover:underline"
                >
                  詳細を見る →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-5 opacity-60">
              <h3 className="font-semibold text-slate-600 mb-1">
                その他の住まい関連（拡張予定）
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                今後、住まいに関する他の分野にも対応を広げていく予定です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 運営方針 */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-2">運営方針</h2>
          <p className="text-slate-500 text-sm mb-8 border-b border-slate-200 pb-6">
            ヨリハブが大切にしていること
          </p>
          <ul className="space-y-4">
            {[
              "事実ベースで案内します。誇大な表現・過剰な売り込みは行いません。",
              "説明不足が起きにくいよう、対応範囲・役割分担を事前に明示します。",
              "事業ごとに役割が異なるため、ヨリハブが担う範囲を各ページで明確にしています。",
              "重要事項はご連絡の前後で確認できるよう、情報の整理を心がけています。",
              "提携先事業者と連携する場合は、その旨を事前にお伝えします。",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-[#1e3a5f] text-white text-xs flex items-center justify-center mt-0.5 font-bold">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4: 役割分担 */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            ヨリハブの役割と対応範囲
          </h2>
          <p className="text-slate-500 text-sm mb-8 border-b border-slate-200 pb-6">
            事業ごとに役割が異なります。詳細は各事業ページをご確認ください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-[#1e3a5f]/20 p-5">
              <h3 className="font-semibold text-[#1e3a5f] mb-3 text-sm">
                ヨリハブが担当する範囲
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {["相談の受付・内容確認", "状況の整理・一次案内", "提携先事業者の紹介・連携"].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-[#1e3a5f] mt-0.5">▸</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-600 mb-3 text-sm">
                提携先・専門事業者が担当する範囲
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {["現地確認・現場調査", "見積の作成・提示", "実際の工事・施工・設置"].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">▸</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            ※ 役割の詳細は事業ごとに異なります。各事業ページをご確認ください。
          </p>
        </div>
      </section>

      {/* Section 5: 運営者 */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-2">運営者について</h2>
          <p className="text-slate-500 text-sm mb-8 border-b border-slate-200 pb-6">
            ヨリハブを運営しているのは誰か
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            ヨリハブは個人事業として運営されているブランドです。運営者の基本情報・事業内容・連絡先については、運営者情報ページに記載しています。
          </p>
          <Link
            href="/operator"
            className="inline-block bg-[#1e3a5f] text-white font-medium px-6 py-3 rounded text-sm hover:bg-[#16304f] transition-colors"
          >
            運営者情報を確認する
          </Link>
        </div>
      </section>

      {/* Section 6: お問い合わせ */}
      <section className="py-14 px-4 bg-[#ebf3fa]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-3">お問い合わせ</h2>
          <p className="text-slate-600 leading-relaxed mb-6 text-sm">
            ご相談・ご確認は以下のページからご連絡ください。
            <br />
            内容により、返信方法や案内内容が異なる場合があります。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1e3a5f] text-white font-semibold px-8 py-3 rounded text-sm hover:bg-[#16304f] transition-colors"
          >
            お問い合わせページへ
          </Link>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            よくあるご質問
          </h2>
          <p className="text-slate-500 text-sm mb-8 border-b border-slate-200 pb-6">
            ヨリハブについてよくいただくご質問をまとめています。
          </p>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                <p className="font-semibold text-slate-800 mb-2 flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-bold shrink-0">Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
