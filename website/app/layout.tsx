import type { Metadata } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { cx } from "lumia-ui";

const inter = Poppins({
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});
const dm = DM_Serif_Display({ weight: ["400"] });

export const metadata: Metadata = {
  title: "Lumia UI",
  description: "Design better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className, dm.className)}>
        {children}
      </body>
    </html>
  );
}
