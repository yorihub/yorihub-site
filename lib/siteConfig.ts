/**
 * ヨリハブ サイト共通定数
 * ここを更新すると各ページへ反映されます
 */
export const siteConfig = {
  brandName: "ヨリハブ",
  brandNameEn: "Yorihub",
  domain: "yorihub.jp",

  /** 代表電話 */
  phone: "03-6821-8571",

  /**
   * 運営者名（確定後に入力してください）
   * 空文字の場合、運営者情報ページの当該行は表示されません
   */
  operatorName: "神田圭佑" as string,

  /**
   * 公開用メールアドレス（確定後に入力してください）
   * 空文字の場合、お問い合わせページのメール欄は表示されません
   */
  contactEmail: "yorihub.info@gmail.com" as string,

  /** 対応・返信についての説明文 */
  contactHours:
    "お問い合わせは随時受け付けています。内容を確認のうえ、順次ご連絡します。",

  /** 営業時間（標準表記） */
  businessHours: "平日9:00〜19:00（土日祝休業／翌営業日折返し）",

  /** 営業時間（短縮表記・ヘッダー等向け） */
  businessHoursShort: "平日9-19時",

  /** 営業時間（粒度別） */
  businessHoursDetail: {
    weekday: "9:00〜19:00",
    weekendAndNight:
      "受付終了（フォーム/LINEで受付・翌営業日朝に折返し）",
    holiday: "休業（フォーム/LINEで受付・翌営業日朝に折返し）",
  },

  /** 事業内容（一文表記） */
  businessDescription:
    "住まいに関する相談受付・内容整理・案内・提携先事業者の紹介",

  /**
   * 所在地（地域レベル表記）
   * 詳細住所は非公開ですが、実体感のためエリアレベルを表示します
   */
  areaLabel: "東京都江東区",

  /**
   * 運営者所在地（登記・住所利用専用バーチャルオフィス）
   * 運営者情報ページの「所在地」欄に表示します
   */
  address: "〒104-0061 東京都中央区銀座1丁目12番4号 N&E BLD.6F",

  /** 現在の主対応領域 */
  primaryArea: "東京23区",

  /** プライバシーポリシー施行日 */
  privacyEffectiveDate: "2026年4月",
};
