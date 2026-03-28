import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ingenious Tools",
  description:
    "A collection of small, low stakes and low effort tools. No logins, no registration, no data collection.",
  icons: {
    icon: "/delphi-lowlod.png",
    shortcut: "/delphi-lowlod.png",
    apple: "/delphi-lowlod.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
