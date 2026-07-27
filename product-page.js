const PRODUCT_WHATSAPP_NUMBER = "60128255009";
const PRODUCT_LANGUAGE_KEY = "oemkosmetik_language";
const PRODUCT_INQUIRY_REFERENCE_STORAGE_KEY = "oemkosmetik_inquiry_reference";
const PRODUCT_INQUIRY_REFERENCE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const PRODUCT_QUALIFIED_FORM_CONVERSION_SEND_TO = (
  window.GOOGLE_ADS_QUALIFIED_FORM_SEND_TO
  || "AW-18196422822/aibZCLrH6dAcEKbB3eRD"
);
const PRODUCT_TRACKING_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "ttclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_matchtype",
  "utm_device",
  "utm_network",
  "utm_adgroup",
];

const productPageConfig = {
  product: document.body.dataset.product || "cosmetics",
  pageName: document.body.dataset.pageName || "oem_cosmetics_malaysia",
  titleMs: document.body.dataset.titleMs || document.title,
  titleEn: document.body.dataset.titleEn || document.title,
  descriptionMs: document.body.dataset.descriptionMs || "",
  descriptionEn: document.body.dataset.descriptionEn || "",
  defaultMessageMs: document.body.dataset.defaultMessageMs || "Hi, saya berminat dengan OEM kosmetik Malaysia.",
  defaultMessageEn: document.body.dataset.defaultMessageEn || "Hi, I am interested in OEM cosmetics Malaysia.",
};

let productLanguage = getProductLanguage();

function getProductLanguage() {
  const saved = localStorage.getItem(PRODUCT_LANGUAGE_KEY);
  return saved === "en" ? "en" : "ms";
}

function getProductTracking() {
  const params = new URLSearchParams(window.location.search);
  const source = {};

  PRODUCT_TRACKING_KEYS.forEach((key) => {
    const value = params.get(key) || sessionStorage.getItem(`lead_${key}`);
    if (!value) return;
    source[key] = value;
    sessionStorage.setItem(`lead_${key}`, value);
  });

  return source;
}

function getProductInquirySourceCode(source) {
  const utmSource = String(source.utm_source || "").toLowerCase();
  const utmMedium = String(source.utm_medium || "").toLowerCase();

  if (
    source.gclid
    || source.gbraid
    || source.wbraid
    || (utmSource.includes("google") && /(cpc|ppc|paid)/.test(utmMedium))
  ) {
    return "G";
  }
  if (source.ttclid || utmSource.includes("tiktok")) return "T";
  if (utmSource.includes("outbound")) return "O";
  if (utmSource.includes("seo") || /(organic|seo)/.test(utmMedium)) return "S";
  return "D";
}

function getProductMalaysiaDateCode() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kuala_Lumpur",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}${values.month}${values.day}`;
}

function getProductRandomReferenceCode(length = 6) {
  const bytes = new Uint8Array(length);
  if (window.crypto && typeof window.crypto.getRandomValues === "function") {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(
    bytes,
    (value) => PRODUCT_INQUIRY_REFERENCE_ALPHABET[
      value % PRODUCT_INQUIRY_REFERENCE_ALPHABET.length
    ],
  ).join("");
}

function getProductInquiryReference() {
  const sourceCode = getProductInquirySourceCode(getProductTracking());
  const saved = sessionStorage.getItem(PRODUCT_INQUIRY_REFERENCE_STORAGE_KEY);
  if (saved && saved.startsWith(`HS-${sourceCode}-`)) return saved;

  const dateCode = getProductMalaysiaDateCode();
  const randomCode = getProductRandomReferenceCode();
  const reference = `HS-${sourceCode}-${dateCode}-${randomCode}`;
  sessionStorage.setItem(PRODUCT_INQUIRY_REFERENCE_STORAGE_KEY, reference);
  return reference;
}

function getProductSourceLines() {
  const entries = Object.entries(getProductTracking());
  const referenceLine = `${productLanguage === "en" ? "Project reference:" : "Rujukan projek:"} ${getProductInquiryReference()}`;
  const pageContext = [
    `- landing_page: ${window.location.pathname}`,
    `- language: ${productLanguage === "en" ? "en-MY" : "ms-MY"}`,
  ];

  if (!entries.length) {
    return [
      referenceLine,
      productLanguage === "en" ? "Lead source: Direct / organic" : "Sumber lead: Direct / organic",
      ...pageContext,
    ];
  }

  return [
    referenceLine,
    productLanguage === "en" ? "Lead source:" : "Sumber lead:",
    ...pageContext,
    ...entries.map(([key, value]) => `- ${key}: ${value}`),
  ];
}

function getProductMessage(link) {
  const message = productLanguage === "en" ? link.dataset.enMessage : link.dataset.msMessage;
  return message || (productLanguage === "en"
    ? productPageConfig.defaultMessageEn
    : productPageConfig.defaultMessageMs);
}

function updateProductWhatsAppLinks() {
  document.querySelectorAll(".product-whatsapp").forEach((link) => {
    const message = [getProductMessage(link), "", ...getProductSourceLines()].join("\n");
    link.href = `https://wa.me/${PRODUCT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}

function applyProductLanguage(language) {
  productLanguage = language === "en" ? "en" : "ms";
  document.documentElement.lang = productLanguage === "en" ? "en-MY" : "ms-MY";
  document.title = productLanguage === "en"
    ? productPageConfig.titleEn
    : productPageConfig.titleMs;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = productLanguage === "en"
      ? productPageConfig.descriptionEn
      : productPageConfig.descriptionMs;
  }

  document.querySelectorAll("[data-ms][data-en]").forEach((element) => {
    element.textContent = element.dataset[productLanguage];
  });

  document.querySelectorAll("[data-ms-placeholder][data-en-placeholder]").forEach((element) => {
    element.placeholder = productLanguage === "en"
      ? element.dataset.enPlaceholder
      : element.dataset.msPlaceholder;
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const isActive = button.dataset.langSwitch === productLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem(PRODUCT_LANGUAGE_KEY, productLanguage);
  updateProductWhatsAppLinks();
}

function getProductBriefMessage(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  const labels = productLanguage === "en"
    ? {
        title: "Cosmetics factory & batch QC brief",
        product_variant: "Product / variants",
        factory_route: "Factory route",
        project_stage: "Project stage",
        evidence_available: "Evidence available",
        main_issue: "Main issue",
        target_batch: "Target batch",
        target_launch: "Target launch",
        budget: "Project budget",
        request: "Request",
        requestValue: "Review factory route, batch evidence and QC gaps before appointment, bulk or scale.",
      }
    : {
        title: "Brief kilang kosmetik & batch QC",
        product_variant: "Produk / variant",
        factory_route: "Route kilang",
        project_stage: "Tahap projek",
        evidence_available: "Bukti yang ada",
        main_issue: "Masalah utama",
        target_batch: "Target batch",
        target_launch: "Target launch",
        budget: "Bajet projek",
        request: "Permintaan",
        requestValue: "Semak factory route, batch evidence dan QC gap sebelum appoint, bulk atau scale.",
      };
  const briefTitle = productLanguage === "en"
    ? form.dataset.briefTitleEn || labels.title
    : form.dataset.briefTitleMs || labels.title;
  const briefRequest = productLanguage === "en"
    ? form.dataset.briefRequestEn || labels.requestValue
    : form.dataset.briefRequestMs || labels.requestValue;

  const orderedFields = [
    "product_variant",
    "factory_route",
    "project_stage",
    "evidence_available",
    "main_issue",
    "target_batch",
    "target_launch",
    "budget",
  ];

  return [
    `Hi, ${briefTitle}.`,
    "",
    ...orderedFields
      .filter((key) => values[key])
      .map((key) => `- ${labels[key]}: ${values[key]}`),
    `- ${labels.request}: ${briefRequest}`,
    "",
    ...getProductSourceLines(),
  ].join("\n");
}

function getProductDisplayName() {
  return productPageConfig.product
    .split("_")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function ensureProductBriefForm() {
  if (document.querySelector("[data-product-brief-form]")) return;

  const insertionPoint = document.querySelector(".product-faq, .faq-section, .product-final-cta");
  if (!insertionPoint) return;

  const productName = getProductDisplayName();
  const section = document.createElement("section");
  section.className = "product-brief-section";
  section.id = "project-brief";
  section.innerHTML = `
    <div class="product-brief-copy">
      <p class="section-kicker" data-ms="Semakan projek 60 saat" data-en="60-second project review">Semakan projek 60 saat</p>
      <h2
        data-ms="Tapis route ${productName} anda sebelum masuk WhatsApp."
        data-en="Filter your ${productName} route before opening WhatsApp."
      >Tapis route ${productName} anda sebelum masuk WhatsApp.</h2>
      <p
        data-ms="Jawab enam perkara penting supaya kami boleh bezakan idea awal, projek tukar kilang dan brand yang sudah bersedia untuk repeat order."
        data-en="Answer six key questions so we can distinguish an early idea, a factory-switch project and a brand ready for repeat orders."
      >Jawab enam perkara penting supaya kami boleh bezakan idea awal, projek tukar kilang dan brand yang sudah bersedia untuk repeat order.</p>
      <div class="product-brief-points">
        <span data-ms="Produk & tahap projek" data-en="Product & project stage">Produk & tahap projek</span>
        <span data-ms="Masalah, batch & launch" data-en="Problem, batch & launch">Masalah, batch & launch</span>
        <span data-ms="Bajet RM3,000+ diberi keutamaan" data-en="RM3,000+ budgets are prioritised">Bajet RM3,000+ diberi keutamaan</span>
      </div>
    </div>
    <form
      class="product-brief-form"
      data-product-brief-form
      data-brief-type="${productPageConfig.product}_project_review"
      data-brief-title-ms="Semakan projek OEM ${productName}"
      data-brief-title-en="OEM ${productName} project review"
      data-brief-request-ms="Semak sample, MOQ, packaging, kos dan route production yang sesuai."
      data-brief-request-en="Review the sample, MOQ, packaging, cost and a suitable production route."
    >
      <input type="hidden" name="product_variant" value="${productName}" />
      <div class="product-brief-field">
        <label for="product-route" data-ms="Route projek" data-en="Project route">Route projek</label>
        <select id="product-route" name="factory_route" required>
          <option value="" data-ms="Pilih satu" data-en="Choose one">Pilih satu</option>
          <option value="New OEM founder" data-ms="Founder baru / jenama baru" data-en="New founder / new brand">Founder baru / jenama baru</option>
          <option value="Switching factory" data-ms="Tukar kilang / baiki sample" data-en="Switch factory / fix a sample">Tukar kilang / baiki sample</option>
          <option value="Scale existing brand" data-ms="Brand sedia ada / repeat order" data-en="Existing brand / repeat order">Brand sedia ada / repeat order</option>
        </select>
      </div>
      <div class="product-brief-field">
        <label for="product-stage" data-ms="Tahap projek" data-en="Project stage">Tahap projek</label>
        <select id="product-stage" name="project_stage" required>
          <option value="" data-ms="Pilih satu" data-en="Choose one">Pilih satu</option>
          <option value="Idea" data-ms="Idea / mencari kilang" data-en="Idea / finding a factory">Idea / mencari kilang</option>
          <option value="Reference ready" data-ms="Sudah ada reference" data-en="Reference ready">Sudah ada reference</option>
          <option value="Sample revision" data-ms="Sedang baiki sample" data-en="Revising a sample">Sedang baiki sample</option>
          <option value="Selling or reorder" data-ms="Sudah menjual / repeat order" data-en="Already selling / repeat order">Sudah menjual / repeat order</option>
        </select>
      </div>
      <div class="product-brief-field">
        <label for="product-issue" data-ms="Masalah utama" data-en="Main issue">Masalah utama</label>
        <select id="product-issue" name="main_issue" required>
          <option value="" data-ms="Pilih satu" data-en="Choose one">Pilih satu</option>
          <option value="Sample quality" data-ms="Warna / tekstur / kualiti sample" data-en="Colour / texture / sample quality">Warna / tekstur / kualiti sample</option>
          <option value="MOQ" data-ms="MOQ terlalu tinggi" data-en="MOQ is too high">MOQ terlalu tinggi</option>
          <option value="Packaging" data-ms="Packaging tidak sesuai" data-en="Packaging is unsuitable">Packaging tidak sesuai</option>
          <option value="Cost or margin" data-ms="Kos tidak masuk margin" data-en="Cost does not fit the margin">Kos tidak masuk margin</option>
          <option value="Supply consistency" data-ms="Supply / QC tidak konsisten" data-en="Inconsistent supply / QC">Supply / QC tidak konsisten</option>
        </select>
      </div>
      <div class="product-brief-field">
        <label for="product-batch" data-ms="Target batch" data-en="Target batch">Target batch</label>
        <select id="product-batch" name="target_batch" required>
          <option value="" data-ms="Pilih kuantiti" data-en="Choose quantity">Pilih kuantiti</option>
          <option value="Below 100 units" data-ms="Bawah 100 unit" data-en="Below 100 units">Bawah 100 unit</option>
          <option value="100-499 units">100-499 unit</option>
          <option value="500-999 units">500-999 unit</option>
          <option value="1,000+ units">1,000+ unit</option>
        </select>
      </div>
      <div class="product-brief-field">
        <label for="product-launch" data-ms="Target launch" data-en="Target launch">Target launch</label>
        <select id="product-launch" name="target_launch" required>
          <option value="" data-ms="Pilih masa" data-en="Choose timing">Pilih masa</option>
          <option value="Within 30 days" data-ms="Dalam 30 hari" data-en="Within 30 days">Dalam 30 hari</option>
          <option value="31-90 days" data-ms="31-90 hari" data-en="31-90 days">31-90 hari</option>
          <option value="Over 90 days" data-ms="Lebih 90 hari" data-en="Over 90 days">Lebih 90 hari</option>
          <option value="Not decided" data-ms="Belum pasti" data-en="Not decided">Belum pasti</option>
        </select>
      </div>
      <div class="product-brief-field">
        <label for="product-budget" data-ms="Bajet projek" data-en="Project budget">Bajet projek</label>
        <select id="product-budget" name="budget" required>
          <option value="" data-ms="Pilih bajet" data-en="Choose budget">Pilih bajet</option>
          <option value="Below RM3,000" data-ms="Bawah RM3,000" data-en="Below RM3,000">Bawah RM3,000</option>
          <option value="RM3,000-RM4,999">RM3,000-RM4,999</option>
          <option value="RM5,000-RM9,999">RM5,000-RM9,999</option>
          <option value="RM10,000+">RM10,000+</option>
        </select>
      </div>
      <button class="btn primary product-brief-submit" type="submit">
        <span aria-hidden="true">→</span>
        <span data-ms="Buka WhatsApp Dengan Brief" data-en="Open WhatsApp With Brief">Buka WhatsApp Dengan Brief</span>
      </button>
      <p
        class="product-brief-note"
        data-ms="Tiada mesej dihantar automatik. Hanya brief RM3,000+ digunakan sebagai signal platform; inquiry sebenar dikira selepas mesej dihantar."
        data-en="No message is sent automatically. Only RM3,000+ briefs are used as a platform signal; a real inquiry is counted after the message is sent."
      >Tiada mesej dihantar automatik. Hanya brief RM3,000+ digunakan sebagai signal platform; inquiry sebenar dikira selepas mesej dihantar.</p>
    </form>
  `;

  insertionPoint.before(section);
}

function isProductBriefQualified(form) {
  const budget = String(new FormData(form).get("budget") || "").trim();
  return Boolean(budget) && !/^(?:Below|Bawah)\s+RM3,000$/i.test(budget);
}

function trackProductBriefOpen(form) {
  const source = getProductTracking();
  const budgetRange = String(new FormData(form).get("budget") || "");
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "project_brief_whatsapp_open",
    lead_channel: "whatsapp",
    inquiry_reference: getProductInquiryReference(),
    business: "oem_kosmetik_malaysia",
    product: productPageConfig.product,
    page: productPageConfig.pageName,
    brief_type: form.dataset.briefType || "product_brief",
    button_location: "brief_form",
    budget_range: budgetRange,
    lead_quality: isProductBriefQualified(form) ? "qualified_budget" : "below_budget",
    language: productLanguage,
    ...source,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", "project_brief_whatsapp_open", {
      event_category: "lead_intent",
      event_label: `oem_${productPageConfig.product}_brief_form`,
      language: productLanguage,
    });
  }

  if (window.ttq && typeof window.ttq.track === "function") {
    window.ttq.track("Contact", {
      content_type: "service",
      content_name: productPageConfig.pageName,
      contact_type: "whatsapp_brief",
      button_location: "brief_form",
      budget_range: budgetRange,
      language: productLanguage,
    });
  }
}

function trackProductWhatsApp(link) {
  const source = getProductTracking();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    lead_channel: "whatsapp",
    inquiry_reference: getProductInquiryReference(),
    business: "oem_kosmetik_malaysia",
    product: productPageConfig.product,
    page: productPageConfig.pageName,
    button_location: link.dataset.location || "unknown",
    language: productLanguage,
    ...source,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "lead",
      event_label: `oem_${productPageConfig.product}_${link.dataset.location || "unknown"}`,
      language: productLanguage,
    });
  }

  if (window.ttq && typeof window.ttq.track === "function") {
    window.ttq.track("Contact", {
      content_type: "service",
      content_name: productPageConfig.pageName,
      contact_type: "whatsapp",
      button_location: link.dataset.location || "unknown",
      language: productLanguage,
    });
  }
}

function trackProductQualifiedBriefConversion(form, callback) {
  if (!isProductBriefQualified(form)) {
    callback();
    return;
  }

  const values = Object.fromEntries(new FormData(form).entries());
  const source = getProductTracking();
  const inquiryReference = getProductInquiryReference();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "qualified_whatsapp_form_submit",
    lead_channel: "whatsapp",
    inquiry_reference: inquiryReference,
    business: "oem_kosmetik_malaysia",
    product: productPageConfig.product,
    page: productPageConfig.pageName,
    brief_type: form.dataset.briefType || "product_brief",
    budget_range: values.budget || "",
    project_stage: values.project_stage || "",
    factory_route: values.factory_route || "",
    language: productLanguage,
    ...source,
  });

  if (window.ttq && typeof window.ttq.track === "function") {
    window.ttq.track("Lead", {
      content_type: "service",
      content_name: productPageConfig.pageName,
      form_name: form.dataset.briefType || "product_brief",
      budget_range: values.budget || "",
      project_stage: values.project_stage || "",
      factory_route: values.factory_route || "",
      inquiry_reference: inquiryReference,
      language: productLanguage,
    });
  }

  if (
    typeof window.gtag !== "function"
    || !PRODUCT_QUALIFIED_FORM_CONVERSION_SEND_TO
  ) {
    callback();
    return;
  }

  let hasNavigated = false;
  const navigate = () => {
    if (hasNavigated) return;
    hasNavigated = true;
    callback();
  };

  window.gtag("event", "conversion", {
    send_to: PRODUCT_QUALIFIED_FORM_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "MYR",
    event_callback: navigate,
  });
  window.setTimeout(navigate, 700);
}

ensureProductBriefForm();

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => applyProductLanguage(button.dataset.langSwitch));
});

document.querySelectorAll(".product-whatsapp").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    updateProductWhatsAppLinks();
    trackProductWhatsApp(link);
    window.location.href = link.href;
  });
});

document.querySelectorAll("[data-product-brief-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const message = getProductBriefMessage(form);
    const href = `https://wa.me/${PRODUCT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    trackProductBriefOpen(form);
    trackProductQualifiedBriefConversion(form, () => {
      window.location.href = href;
    });
  });
});

const productBriefForm = document.querySelector("[data-product-brief-form]");
const productMobileCta = document.querySelector(".mobile-whatsapp-cta");

if (productBriefForm && productMobileCta && "IntersectionObserver" in window) {
  const briefVisibilityObserver = new IntersectionObserver((entries) => {
    const isBriefVisible = entries.some((entry) => entry.isIntersecting);
    productMobileCta.classList.toggle("is-brief-hidden", isBriefVisible);
  }, { threshold: 0.02 });

  briefVisibilityObserver.observe(productBriefForm);
}

applyProductLanguage(productLanguage);
