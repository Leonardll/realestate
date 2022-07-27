export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
    path_url: url,
  });
};

export const consentGranted = () => {
  window.gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
  });
};

export const consentDenied = () => {
  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
