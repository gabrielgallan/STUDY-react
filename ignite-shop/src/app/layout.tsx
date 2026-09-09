import type { Metadata } from "next";
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: "Ignite Shop",
};

const roboto = Roboto({
  subsets: ['latin'],
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
