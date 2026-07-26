(function initializeAcquisitionTracking(windowObject, documentObject) {
  const googleAdsId = "AW-18196422822";
  const tiktokPixelId = "D9DPOORC77U79CKF53C0";
  const documentRoot = documentObject.documentElement;

  windowObject.dataLayer = windowObject.dataLayer || [];
  windowObject.gtag = windowObject.gtag || function gtag() {
    windowObject.dataLayer.push(arguments);
  };

  if (!documentObject.querySelector(`script[src*="${googleAdsId}"]`)) {
    const googleScript = documentObject.createElement("script");
    googleScript.async = true;
    googleScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`;
    documentRoot.dataset.googleTagState = "queued";
    googleScript.addEventListener("load", () => {
      documentRoot.dataset.googleTagState = "loaded";
    }, { once: true });
    googleScript.addEventListener("error", () => {
      documentRoot.dataset.googleTagState = "error";
    }, { once: true });
    documentObject.head.appendChild(googleScript);
  }

  windowObject.gtag("js", new Date());
  windowObject.gtag("config", googleAdsId);

  if (windowObject.ttq && typeof windowObject.ttq.track === "function") return;

  windowObject.TiktokAnalyticsObject = "ttq";
  const ttq = windowObject.ttq = windowObject.ttq || [];
  ttq.methods = [
    "page",
    "track",
    "identify",
    "instances",
    "debug",
    "on",
    "off",
    "once",
    "ready",
    "alias",
    "group",
    "enableCookie",
    "disableCookie",
    "holdConsent",
    "revokeConsent",
    "grantConsent",
  ];
  ttq.setAndDefer = function setAndDefer(target, method) {
    target[method] = function deferredMethod() {
      target.push([method].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };

  for (let index = 0; index < ttq.methods.length; index += 1) {
    ttq.setAndDefer(ttq, ttq.methods[index]);
  }

  ttq.instance = function instance(pixelId) {
    const instanceQueue = ttq._i?.[pixelId] || [];
    for (let index = 0; index < ttq.methods.length; index += 1) {
      ttq.setAndDefer(instanceQueue, ttq.methods[index]);
    }
    return instanceQueue;
  };

  ttq.load = function load(pixelId, options) {
    const pixelScriptUrl = "https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._i = ttq._i || {};
    ttq._i[pixelId] = [];
    ttq._i[pixelId]._u = pixelScriptUrl;
    ttq._t = ttq._t || {};
    ttq._t[pixelId] = Date.now();
    ttq._o = ttq._o || {};
    ttq._o[pixelId] = options || {};

    const pixelScript = documentObject.createElement("script");
    pixelScript.type = "text/javascript";
    pixelScript.async = true;
    pixelScript.src = `${pixelScriptUrl}?sdkid=${pixelId}&lib=ttq`;
    documentRoot.dataset.tiktokPixelState = "queued";
    pixelScript.addEventListener("load", () => {
      documentRoot.dataset.tiktokPixelState = "loaded";
    }, { once: true });
    pixelScript.addEventListener("error", () => {
      documentRoot.dataset.tiktokPixelState = "error";
    }, { once: true });
    documentObject.head.appendChild(pixelScript);
  };

  ttq.load(tiktokPixelId);
  ttq.page();
  documentRoot.dataset.acquisitionTracking = "ready";
}(window, document));
