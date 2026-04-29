import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "ヨリハブのプライバシーポリシーです。個人情報の取り扱いについてご説明します。",
};

const OPERATOR_NAME = siteConfig.brandName;
const CONTACT_PHONE = siteConfig.phone;
const EFFECTIVE_DATE = siteConfig.privacyEffectiveDate;

export default function PrivacyPage() {
  return (
    <div className="py-14 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
            Privacy Policy
          </p>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-slate-500 text-sm">施行日：{EFFECTIVE_DATE}</p>
        </div>

        <div className="prose-yorihub space-y-10 text-slate-700 text-sm leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              1. 事業者情報
            </h2>
            <p>
              本プライバシーポリシーは、{OPERATOR_NAME}（以下「当方」）が運営するブランド「ヨリハブ」において、
              取得した個人情報の取り扱いについて定めるものです。
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              2. 取得する情報
            </h2>
            <p className="mb-3">
              当方は、以下の場合に個人情報を取得することがあります。
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>お電話またはメールにより連絡をいただいた場合</li>
              <li>相談対応の過程でご提供いただいた場合</li>
            </ul>
            <p className="mt-3">
              取得する情報の例：氏名、メールアドレス、電話番号、住所、ご相談内容など。
              ご提供は任意ですが、一部情報がない場合は対応が困難になる場合があります。
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              3. 利用目的
            </h2>
            <p className="mb-3">取得した個人情報は、以下の目的で利用します。</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>お問い合わせへの返信・対応</li>
              <li>ご相談内容の確認・整理</li>
              <li>提携先事業者へのご相談内容の引き継ぎ（ご了承いただいた場合に限ります）</li>
              <li>サービスに関するご連絡</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              4. 第三者への提供
            </h2>
            <p className="mb-3">
              当方は、以下の場合を除き、取得した個人情報を第三者に提供しません。
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>ご本人の同意がある場合</li>
              <li>法令に基づき開示が必要な場合</li>
              <li>
                ご了承のうえで提携先事業者に引き継ぐ場合
                （事前にご説明し、ご同意を確認した場合に限ります）
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              5. 管理・保管
            </h2>
            <p>
              取得した個人情報は、不正アクセス・紛失・漏洩等を防止するため、
              適切な管理を行います。不要になった個人情報は速やかに削除または廃棄します。
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              6. 開示・訂正・削除等のご請求
            </h2>
            <p>
              ご本人から個人情報の開示・訂正・削除・利用停止のご請求があった場合は、
              内容を確認のうえ、合理的な範囲で対応します。
              ご請求は下記の連絡先までご連絡ください。
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              7. アクセス解析ツール等について
            </h2>
            <p>
              現時点では、アクセス解析ツール・Cookieによる情報収集は行っていません。
              今後導入する場合は、本ポリシーを更新のうえお知らせします。
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              8. ポリシーの変更
            </h2>
            <p>
              本プライバシーポリシーは、必要に応じて改定する場合があります。
              改定した場合は、本ページにて告知します。
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              9. お問い合わせ先
            </h2>
            <p className="mb-2">
              個人情報に関するお問い合わせは、以下までご連絡ください。
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded p-4">
              <p className="font-medium text-slate-800">{OPERATOR_NAME}</p>
              <p className="mt-1 text-slate-700">
                電話：{CONTACT_PHONE}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
