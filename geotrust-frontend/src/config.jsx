// src/config.jsx
import { createAppKit } from '@reown/appkit';
import { base, lisk, liskSepolia, sepolia } from 'wagmi/chains';

const projectId = '69d9220b2a026845ee35aa00f6c4f928';

const config = {
    appName: 'Geotrust',
    projectId,
    chains: [
        lisk,
        liskSepolia,
        base,
        ...(process.env.VITE_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ],
    ssr: true,
};

// Create the AppKit instance
createAppKit(config);

// Export the config
export { config };
