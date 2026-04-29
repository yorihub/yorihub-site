import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事業一覧",
  description:
    "ヨリハブが現在対応している事業の一覧です。防犯関連をはじめ、住まいに関する相談受付・案内を行っています。",
};

const services = [
  {
    id: "security-camera",
    label: "防犯関連",
    href: "/services/security-camera",
    description:
      "防犯カメラ・セキュリティ対策に関する相談受付・案内・提携先の紹介を行っています。現地確認・見積・設置は提携先事業者が担当します。",
    status: "active",
  },
];

const plannedServices = [
  {
    label: "水まわり関連（準備中）",
    description: "水道・排水・給湯など、住まいの水まわりに関する対応を検討しています。",
  },
  {
    label: "その他の住まい関連（準備中）",
    description: "住まいに関するその他の分野についても、順次対応を拡張していく予定です。",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-14 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
            Services
          </p>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">事業一覧</h1>
          <p className="text-slate-600 leading-relaxed">
            ヨリハブが現在対応している事業の一覧です。
            各事業により、ヨリハブが担う役割・提携先の役割・対応範囲が異なります。
            ご利用の前に各事業ページをご確認ください。
          </p>
        </div>

        {/* Active Services */}
        <section className="mb-12">
          <h2 className="text-base font-semibold text-slate-500 mb-4 tracking-wide">
            現在対応中の事業
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-[#1e3a5f]/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-slate-800">{service.label}</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                        対応中
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={service.href}
                    className="inline-block text-sm font-medium text-[#1e3a5f] border border-[#1e3a5f]/30 px-4 py-2 rounded hover:bg-[#1e3a5f] hover:text-white transition-colors"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Planned Services */}
        <section className="mb-12">
          <h2 className="text-base font-semibold text-slate-400 mb-4 tracking-wide">
            今後対応予定の事業
          </h2>
          <div className="space-y-3">
            {plannedServices.map((service) => (
              <div
                key={service.label}
                className="bg-slate-50 border border-slate-100 rounded-lg p-5 opacity-70"
              >
                <h3 className="font-medium text-slate-500 mb-1 text-sm">{service.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-2">事業ごとの役割について</p>
          <p>
            ヨリハブは施工会社ではありません。各事業において、相談受付・内容整理・案内・提携先紹介の役割を担います。
            実際の現地確認・見積・施工は提携先の専門事業者が行います。詳細は各事業ページをご確認ください。
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <Link
            href="/contact"
            className="inline-block bg-[#1e3a5f] text-white font-medium px-6 py-3 rounded text-sm hover:bg-[#16304f] transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
