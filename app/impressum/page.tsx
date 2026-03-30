import { redirect } from "next/navigation";

import { defaultLocale, withLocale } from "@/lib/i18n";

export default function ImpressumPage() {
  redirect(withLocale(defaultLocale, "/impressum"));
}
