import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lindong.live"),
  title: "林东 | 用 AI Agent 重构软件工程",
  description:
    "林东的个人网站：技术&产品人，长期关注 AI Agent、软件工程、开源基础设施与 AI 产品创业。",
  alternates: {
    canonical: "https://lindong.live",
  },
  openGraph: {
    title: "林东 | 用 AI Agent 重构软件工程",
    description:
      "技术&产品人 · 用 AI Agent 重构软件工程。了解林东的经历、当前方向、作品与联系方式。",
    url: "https://lindong.live",
    siteName: "林东个人网站",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "林东个人网站预览图",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "林东 | 用 AI Agent 重构软件工程",
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
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
