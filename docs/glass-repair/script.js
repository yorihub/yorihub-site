/* ============================================================
   ヨリハブ LP — script.js
   ・固定CTAバー スクロール表示
   ・FAQアコーディオン aria 同期
   ============================================================ */

(function () {
  'use strict';


  /* ----------------------------------------------------------
     2. 固定CTAバー 表示 / 非表示（IntersectionObserver）
     ----------------------------------------------------------
     FV内の電話番号CTAボタンが viewport 外に出た瞬間に表示し、
     viewport 内に戻ったら非表示にする。
     ページ最下部（CTA⑤付近）ではスクロールイベントで非表示にする。
  ---------------------------------------------------------- */
  var mobileCta = document.getElementById('fixed-cta-mobile');
  var pcCta     = document.getElementById('fixed-cta-pc');
  var fvCta     = document.querySelector('#section-1-fv .btn-cta--large');

  // FV内CTAが画面内にあるかどうかのフラグ
  var fvCtaVisible = true;

  function showFixedCta() {
    if (mobileCta) {
      mobileCta.classList.add('is-visible');
      mobileCta.setAttribute('aria-hidden', 'false');
    }
    if (pcCta && window.innerWidth >= 640) {
      pcCta.classList.add('is-visible');
      pcCta.setAttribute('aria-hidden', 'false');
    }
  }

  function hideFixedCta() {
    if (mobileCta) {
      mobileCta.classList.remove('is-visible');
      mobileCta.setAttribute('aria-hidden', 'true');
    }
    if (pcCta) {
      pcCta.classList.remove('is-visible');
      pcCta.setAttribute('aria-hidden', 'true');
    }
  }

  function updateFixedCtaVisibility() {
    if (fvCtaVisible) {
      hideFixedCta();
      return;
    }

    // ページ最下部 200px 以内では非表示（CTA⑤と重複しないよう）
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var docHeight    = document.documentElement.scrollHeight;
    var scrollBottom = window.scrollY + windowHeight;
    var nearBottom   = scrollBottom >= docHeight - 200;

    if (nearBottom) {
      hideFixedCta();
    } else {
      showFixedCta();
    }
  }

  // IntersectionObserver: FV内CTAボタンの viewport 出入りを監視
  if (fvCta && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        fvCtaVisible = entry.isIntersecting;
        updateFixedCtaVisibility();
      });
    }, { threshold: 0 });

    observer.observe(fvCta);
  }

  // スクロール: ページ最下部の判定のみ（IntersectionObserverと併用）
  window.addEventListener('scroll', updateFixedCtaVisibility, { passive: true });
  window.addEventListener('resize', updateFixedCtaVisibility, { passive: true });

  // 初期状態を設定
  updateFixedCtaVisibility();


  /* ----------------------------------------------------------
     3. FAQアコーディオン（<details> 要素の aria-expanded 同期）
     ----------------------------------------------------------
     ブラウザ標準の <details> / <summary> を使用しているため、
     開閉自体はHTML/CSSで処理される。
     ここでは aria-expanded 属性を同期するのみ。
  ---------------------------------------------------------- */
  var detailsEls = document.querySelectorAll('.faq-item--accordion');

  detailsEls.forEach(function (details) {
    var summary = details.querySelector('summary');
    if (!summary) { return; }

    // 初期状態を設定
    summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');

    // toggle イベントで aria-expanded を更新
    details.addEventListener('toggle', function () {
      summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');
    });
  });

})();
