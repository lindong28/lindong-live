import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lindong.live"),
  title: "Cyber Rabbit | 用 AI Agent 重构软件工程",
  description:
    "Cyber Rabbit的个人网站：技术&产品人，长期关注 AI Agent、软件工程、开源基础设施与 AI 产品创业。",
  alternates: {
    canonical: "https://lindong.live",
  },
  openGraph: {
    title: "Cyber Rabbit | 用 AI Agent 重构软件工程",
    description:
      "技术&产品人 · 用 AI Agent 重构软件工程。了解Cyber Rabbit的经历、当前方向、作品与联系方式。",
    url: "https://lindong.live",
    siteName: "Cyber Rabbit个人网站",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cyber Rabbit个人网站预览图",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Rabbit | 用 AI Agent 重构软件工程",
    description: "技术&产品人 · 用 AI Agent 重构软件工程",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
