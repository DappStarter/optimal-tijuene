require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth spider coil install clock off genius'; 
let testAccounts = [
"0xa036d42e95a295927dbfaa2e8c1188825e86250bbefae5c311d0ee58bfbbc0da",
"0xe8459398e67a028265d22a0173e53e7258f55e5f6d3f0a5ec998f92cd472cdd0",
"0xd03035a8b8aa55ad601d2084bcea52fb77b1f630600a8d1456244ba9449a22ac",
"0x2f49d19e88b693bb17bd522256c5a5f00ba0b1157d74079802171b6401b5d120",
"0x36c98745197cfb334c024ce2fd6ab7b44dbc7f283b04f5e236446bf8cffc93d0",
"0x1da95c2a1d78c2288a527a783477878d7b03f409757055c8bf798ef4d52a94ae",
"0x1cc5ddea08156136df038798238fe2b7fa9c2fe764f78fba57de978beb75af0d",
"0x7812f8f45170cb52762cf748de18c3007e4d32676b28f0e3d19f0c18c455f488",
"0x704f9bbc795ff1633363039a7b9af229b85e2432ba5aa1d0f5b084110b4f0727",
"0x0aa2fbaa05926043fba7e708938b26a0aafd23f488d30ef6c6ab604189de884b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

