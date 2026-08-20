/*
  Real contact details, defined once.

  These appear on the Contact page, in the footer on every page, and in the
  JSON-LD Organization block. Keeping them here means changing a number or
  address is one edit, not three that can drift apart.
*/
export const EMAIL = "info@syedawais.com";
export const MAILTO = `mailto:${EMAIL}`;

/** As written for humans. */
export const PHONE_DISPLAY = "+1 (276) 301-9673";

/** E.164, for tel: links and structured data. */
export const PHONE_E164 = "+12763019673";
export const TEL = `tel:${PHONE_E164}`;

/*
  wa.me needs the number as digits only: no plus, spaces, brackets or
  dashes. Derived from E.164 so the two can never disagree.
*/
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace(/\D/g, "")}`;
