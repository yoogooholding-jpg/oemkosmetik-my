const PRODUCT_WHATSAPP_NUMBER = "60128255009";
const PRODUCT_LANGUAGE_KEY = "oemkosmetik_language";
const PRODUCT_INQUIRY_REFERENCE_STORAGE_KEY = "oemkosmetik_inquiry_reference";
const PRODUCT_INQUIRY_REFERENCE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
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
    ...orderedFields.map((key) => `- ${labels[key]}: ${values[key] || "-"}`),
    `- ${labels.request}: ${briefRequest}`,
    "",
    ...getProductSourceLines(),
  ].join("\n");
}

function trackProductBriefOpen(form) {
  const source = getProductTracking();
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
    window.location.href = href;
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
