"use client";

import OnchainKitProviderComponent from "./onchain-kit.provider";

export default function RootProvider({ children, }: { children: React.ReactNode }) {
    return (
        <OnchainKitProviderComponent>
            {children}
        </OnchainKitProviderComponent>
    );
}