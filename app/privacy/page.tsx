import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "ヨリハブのプライバシーポリシーです。個人情報の取り扱いについてご説明します。",
};

const BRAND_NAME = siteConfig.brandName;
const CONTACT_PHONE = siteConfig.phone;
const CONTACT_EMAIL = "yorihub.info@gmail.com";

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
          <p className="text-slate-500 text-sm">施行日：2026年5月1日（v1.1）</p>
        </div>

        <div className="prose-yorihub space-y-10 text-slate-700 text-sm leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              1. 事業者情報
            </h2>
            <p>
              本プライバシーポリシーは、「{BRAND_NAME}」（運営者氏名・所在地は
              <Link href="/operator" className="text-sky-700 underline hover:text-sky-900">
                運営者情報
              </Link>
              ページに記載。以下「当方」）が運営するブランド「{BRAND_NAME}」において、
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
              <li>ホームページのお問い合わせフォームよりご連絡をいただいた場合</li>
              <li>相談対応の過程でご提供いただいた場合</li>
            </ul>
            <p className="mt-3">
              取得する情報の例：氏名、メールアドレス、電話番号、住所、ご相談内容（被害・破損状況、希望日時等）など。
              ご提供は任意ですが、一部情報がない場合は対応が困難になる場合があります。
            </p>
            <p className="mt-3">
              なお、お問い合わせのお電話については、内容確認・サービス品質向上の目的で、通話を録音させていただく場合があります。
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
              4. 第三者への提供（提携業者への引継ぎ）
            </h2>
            <p className="mb-3">
              当方の事業は、お客様のご相談を提携業者にお繋ぎする紹介業務です。そのため、お客様のご同意を確認のうえ、以下のとおり個人情報を提携業者に提供します。
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                提供先：当方と業務提携契約を締結している東京23区内のガラス修理業者（提携業者一覧は
                <Link href="/operator" className="text-sky-700 underline hover:text-sky-900">
                  運営者情報
                </Link>
                ページに記載）
              </li>
              <li>提供する情報の項目：氏名、電話番号、住所、ご相談内容（被害・破損状況、希望日時等）</li>
              <li>提供方法：電話またはメールによる伝達</li>
              <li>提供先での利用目的：現地調査、見積もり提示、修理工事の実施</li>
            </ul>
            <p className="mt-3">
              当方は、ご相談の電話またはメール対応の過程で、提携業者への情報引継ぎについてご説明し、ご同意を確認したうえで提供します。同意いただけない場合、サービスのご提供は困難となる場合があります。
            </p>
            <p className="mt-3">
              なお、上記のほか、以下の場合に第三者提供を行うことがあります。
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合であって、本人の同意を得ることが困難であるとき</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              5. 管理・保管
            </h2>
            <p>
              取得した個人情報は、不正アクセス・紛失・漏洩等を防止するため、適切な管理を行います。具体的には、事業用アカウント・端末の分離、アクセス権限の管理、パスワードによる保護等を実施します。
            </p>
            <p className="mt-3">
              ご相談・紹介対応の完了後、原則として3年間（保証期間および苦情対応期間を考慮）保管したのち、適切に削除または廃棄します。法令に基づき保存義務がある場合はその期間に従います。
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              6. 開示・訂正・削除等のご請求
            </h2>
            <p>
              ご本人から個人情報の開示・訂正・削除・利用停止のご請求、または第三者提供記録の開示請求があった場合は、内容を確認のうえ、合理的な範囲で対応します。ご請求は下記の連絡先までご連絡ください。なお、ご請求がご本人によるものであることを確認させていただく場合があります。
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">
              7. アクセス解析・広告計測ツールについて
            </h2>
            <p className="mb-3">
              当方は、サイトの利用状況の把握および広告効果測定のため、以下のツールを使用する場合があります。
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Google Analytics（Googleが提供）</li>
              <li>Google Ads コンバージョントラッキング（Googleが提供）</li>
            </ul>
            <p className="mt-3">
              これらのツールはCookieを使用してデータを収集しますが、収集される情報は匿名であり、個人を特定するものではありません。これらのデータの取り扱いについては、
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 underline hover:text-sky-900"
              >
                Googleのプライバシーポリシー
              </a>
              （https://policies.google.com/privacy）をご確認ください。
            </p>
            <p className="mt-3">
              ブラウザの設定によりCookieを無効化することが可能です。
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
              <p className="font-medium text-slate-800">{BRAND_NAME}</p>
              <p className="mt-1 text-slate-700">
                電話：{CONTACT_PHONE}
              </p>
              <p className="mt-1 text-slate-700">
                メール：{CONTACT_EMAIL}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
