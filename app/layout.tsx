import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";
import type { Metadata } from "next";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
    metadataBase: new URL('https://everest.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
    title: "Everest",
    description: "The best travel company that will help you create an unforgettable journey to every corner of the world ",
    icons: {
      icon: [
        {
          "url": "/everest.ico",
          "sizes": "32x32",
          "type": "image/x-icon"
        }
          ]
    },
    openGraph: {
      title: "Everest",
      description: "The best travel company that will help you create an unforgettable journey to every corner of the world ",
      images: [
        {
          url: "/everest.png",
          width: 1200,
          height: 630,
        },
      ],
    },
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />
            <main className={styles.main}>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
