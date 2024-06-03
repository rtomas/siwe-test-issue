import {
    SIWEVerifyMessageArgs,
    SIWECreateMessageArgs,
    SIWESession,
    createSIWEConfig,
    formatMessage,
    Web3ModalSIWEClient,
} from "@web3modal/siwe";
import { SIWEMessageArgs } from "@web3modal/siwe/dist/types/core/utils/TypeUtils";


async function getMessageParams(): Promise<SIWEMessageArgs> {
    return {
        domain: window.location.host,
        uri: window.location.origin,
        chains: [1, 11155111],
        statement: "Sign in to DEMO APP",
        iat: new Date().toISOString()
    };
}

async function getNonce(address?: string): Promise<string> {
    return address + "nonce";
}

async function getSession(): Promise<SIWESession> {
    return {
        address: "0x1",
        chainId: 1
    };
}

async function verifyMessage({message, signature}: SIWEVerifyMessageArgs): Promise<boolean> {
    console.log("verifyMessage", message, signature);
    return true;
}

async function signOut(): Promise<boolean> {
    return true;
}

export const siweConfig: Web3ModalSIWEClient = createSIWEConfig({
    getMessageParams,
    createMessage: ({ address, ...args }: SIWECreateMessageArgs) => formatMessage(args, address),
    getNonce,
    getSession,
    verifyMessage,
    signOut,
});


