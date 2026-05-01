import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "提携先の方へ | ヨリハブ",
  description:
    "ヨリハブは住まい関連の相談受付・内容整理・案内を行う窓口です。実務を担う専門事業者様との連携を通じて、ご相談者への案内を行っています。連携のイメージ・役割分担・運営方針をご案内します。",
};

export default function PartnersPage() {
  return (
    <div className="py-14 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
            Partners
          </p>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            提携先の方へ
          </h1>
          <p className="text-slate-600 leading-relaxed">
            ヨリハブは、住まいに関するご相談を受け付け、内容を整理したうえで、
            対応可能な専門事業者への案内・紹介を行う窓口です。
            実地の業務（現地確認・見積・施工など）は、提携先事業者の方にお願いする場合があります。
          </p>
        </div>

        {/* ヨリハブの立場 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            ヨリハブの立場と役割
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            ヨリハブは施工会社でも工事業者でもありません。
            住まいに関する相談を受け付け、内容を整理し、適切な事業者への案内・紹介を行う窓口として運営しています。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <p className="text-sm font-semibold text-[#1e3a5f] mb-3">
              ヨリハブが担う範囲
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                "相談の受付・一次対応",
                "ご要望・状況の内容整理",
                "対応可能な案内の提供",
                "提携先事業者への紹介・引き継ぎ",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] shrink-0 font-bold mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 現在の対応領域 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            現在の主な対応領域
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-5">
            現時点では窓ガラスの修理・交換を中心に対応しています。
            対応エリアは{siteConfig.areaLabel}を中心としています。
            今後、水まわりをはじめ、住まい関連の他の分野にも対応を広げていく予定です。
          </p>
          <div className="space-y-3">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-slate-800 text-sm">
                  窓ガラスの修理・交換
                </h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                  対応中
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                窓ガラスの修理・交換に関するご相談受付・提携業者のご紹介。
                対応エリア：{siteConfig.areaLabel}（戸建て向け中心）
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 opacity-70">
              <h3 className="font-medium text-slate-500 text-sm mb-1">
                水まわり関連・その他住まい関連（拡張予定）
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                今後、対応分野を段階的に拡張していく予定です。
              </p>
            </div>
          </div>
        </section>

        {/* 提携先へのお願い */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            提携先事業者にお願いする役割
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-5">
            ヨリハブが相談受付・内容整理・案内を行い、実地の業務は提携先事業者の方に対応をお願いしています。
          </p>
          <ul className="space-y-3 text-sm text-slate-700">
            {[
              { title: "現地確認・現場調査", desc: "お客様の状況を現地で確認し、必要な対応を判断します。" },
              { title: "見積の作成・提示", desc: "費用・工期・仕様について、お客様へ正式にご提示します。" },
              { title: "工事・施工・設置", desc: "機器の設置、工事、施工などの実務対応を担います。" },
              { title: "専門的判断を伴う実務対応", desc: "現場の状況に応じた専門的な判断・提案を行います。" },
              { title: "必要に応じたお客様への説明", desc: "施工内容・費用・注意事項について、お客様への説明を行います。" },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3 border-l-2 border-slate-200 pl-4">
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ヨリハブが大切にしていること */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            ヨリハブが大切にしていること
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            小規模な運営ではありますが、以下を運営方針として定めています。
            連携いただく事業者の方にも、この考えを共有したうえでお付き合いできればと考えています。
          </p>
          <ul className="space-y-4">
            {[
              {
                title: "事実ベースの案内",
                desc: "誇大表現・過剰な売り込みは行いません。できること・できないことを明確に伝えます。",
              },
              {
                title: "役割範囲の明示",
                desc: "ヨリハブの担う範囲と提携先の担う範囲を、事前にお客様へ説明します。",
              },
              {
                title: "重要事項の事前確認",
                desc: "費用・工期・施工内容についての重要事項は、作業前の説明・確認を重視します。",
              },
              {
                title: "説明不足の防止",
                desc: "案内の過程で情報が途切れないよう、引き継ぎ時の情報共有を丁寧に行います。",
              },
              {
                title: "無理な案内・誇大表現を避ける",
                desc: "お客様の状況に合わない案内を無理に進めることはしません。",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-[#1e3a5f] text-white text-xs flex items-center justify-center mt-0.5 font-bold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-800 mb-0.5">{item.title}</p>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 連携のイメージ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
            連携のイメージ
          </h2>
          <p className="text-xs text-slate-500 mb-5">
            ※ 以下は一般的な流れのイメージです。案件や対応内容によって異なる場合があります。
          </p>
          <ol className="space-y-5">
            {[
              {
                step: "1",
                title: "お客様からの相談受付（ヨリハブ）",
                desc: "ヨリハブがお客様からの相談を受け付け、状況・要望を整理します。",
              },
              {
                step: "2",
                title: "内容整理・案内（ヨリハブ）",
                desc: "整理した内容をもとに、対応可能な案内を行います。提携先事業者の紹介が適切な場合はその旨をお伝えします。",
              },
              {
                step: "3",
                title: "提携先事業者への引き継ぎ（ヨリハブ→提携先）",
                desc: "お客様の同意を得たうえで、整理した情報を提携先へ引き継ぎます。",
              },
              {
                step: "4",
                title: "現地確認・見積・施工（提携先）",
                desc: "現地確認、見積、工事・施工・設置は提携先事業者が担当します。",
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

        {/* お問い合わせ */}
        <section className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
          <h2 className="text-base font-bold text-slate-800 mb-3">
            連携・事業についてのお問い合わせ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            連携に関するご質問・ご確認は、以下の連絡先までお気軽にお問い合わせください。
          </p>
          <p className="text-lg font-bold text-[#1e3a5f] mb-1">{siteConfig.phone}</p>
          {siteConfig.contactEmail && (
            <p className="text-sm text-slate-700 mb-4">
              メール：
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-[#1e3a5f] hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          )}
          <p className="text-xs text-slate-500 mb-5">
            {siteConfig.contactHours}
          </p>
          <Link
            href="/contact"
            className="inline-block border border-[#1e3a5f]/40 text-[#1e3a5f] font-medium px-5 py-2.5 rounded text-sm hover:bg-[#1e3a5f] hover:text-white transition-colors"
          >
            お問い合わせページを見る
          </Link>
        </section>

        {/* Navigation */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Link
            href="/about"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            ← ヨリハブについて
          </Link>
          <Link
            href="/services"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            事業一覧を見る →
          </Link>
        </div>
      </div>
    </div>
  );
}
