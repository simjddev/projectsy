import { redirect } from "next/navigation";

import { defaultLocale, withLocale } from "@/lib/i18n";

export default function DatenschutzPage() {
  redirect(withLocale(defaultLocale, "/datenschutz"));
}
