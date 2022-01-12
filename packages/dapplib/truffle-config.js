require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note stereo smile just credit frame gauge'; 
let testAccounts = [
"0x16a3c13017db96639ab3d33afe45a6bef880ef4eadcd91afe82ed9af96b5091a",
"0x4e62d334d80c9f117df8ffca5c1d8d08d0e2820a81e10cd84f2d822c91482e2a",
"0x60e61286d860989ca69f20405fb5db94538e218d8fecaab9b485ad93784735d2",
"0x4f2e23c1a4d932da87808049499a5730e962249fea303b479dcaeee9e3d2c2ab",
"0x25ab97d392b7473518074d38986beb2c8e9a68f0aeadf8a4a9cf1d2799446ed0",
"0xd204590333f7c4ac184fbc6db6d99b179ca78c99fa5fa21e2232d6df46179891",
"0xafe9d112607678a49f567aca4e80409b5b562927ad3d39d053f10ed56160f385",
"0xbdaad0f710aa025794390ce6c029318779c1eb52bd6d9586f2fb8ecdbff341c9",
"0x0340e9bec40b3b72a20d6eb357c0cfa79dcb7c59adcfcdf85dbed685625df38a",
"0xd0d8bfccd17dbd31b9744fb1803e57fc5d6520fa03d66f1ecb0326ea2e8826ed"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


