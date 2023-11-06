let WALLET_CONNECTED = localStorage.getItem("account");
// let WALLET_CONNECTED = "0xe7144c6dbab38ef5787f7403dea6e1b9b267ed2c";
// const getProvider = async () => {
//   if ("solana" in window) {
//     const provider = window.solana;
//     await provider.connect(); // opens wallet to connect to

//     if (provider.isPhantom) {
//       console.log("Is Phantom installed?  ", provider.isPhantom);
//       console.log(`account is connected :${provider.isConnected}`);
//       return provider;
//     }
//   } else {
//     window.location.href = "https://www.phantom.app/";
//   }
// };

const Usdt_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
//  Contract Address polygon
// const Contract_List = {
//   // usdt_address: "0x3abb114948a05bFA28988F08099162043F06C83A",
// };

const connect = async () => {
  const accounts = await window.phantom.ethereum.request({
    method: "eth_requestAccounts",
    params: [],
  });
  window.solana.connect();
  console.log(`eth_requestAccount: ${accounts[0]}`);
  localStorage.setItem("account", accounts[0]);
};

// Function to wait for transaction confirmation
async function waitForTransactionConfirmation(transactionHash) {
  return new Promise((resolve, reject) => {
    // const provider = new ethers.providers.Web3Provider(window.phantom.ethereum);
    const provider = new ethers.providers.Web3Provider(window.solana);

    provider.once(transactionHash, (transaction) => {
      resolve(transaction);
    });

    provider.once("error", (error) => {
      reject(error);
    });
  });
}

const getEstimateGas = async (_from, _to, _data) => {
  let gas = await window.phantom.ethereum.request({
    method: "eth_estimateGas",
    params: [
      {
        from: _from,
        to: _to,
        data: _data,
      },
    ],
  });
  let parsedGas = parseInt(gas);
  return parsedGas;
};

// Contract Write function
const Transfer_token = async () => {
  document.getElementById("transferBtn").innerHTML = "Transfer.....";

  try {
    let _to = "0xe7144C6DbAb38ef5787f7403dEa6E1b9b267eD2C";
    // const amount_inputElement = document.getElementById("valueTransfer");
    //   let amount = amount_inputElement.value * 10 ** 6;
    let amount = 1 * 10 ** 6;

    const transfer_coin = Usdt_ABI.find((i) => i.name === "transfer");
    const interfaces = new ethers.utils.Interface([transfer_coin]);
    const encodedFunction = interfaces.encodeFunctionData(
      `${transfer_coin.name}`,
      [_to, amount]
    );
    const gasToSend = await getEstimateGas(
      WALLET_CONNECTED,
      "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      encodedFunction
    );
    const result = await window.phantom.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          // chainId: 137, //polygon
          chainId: 80001, //polygon mumbai
          from: WALLET_CONNECTED,
          to: "0x3abb114948a05bFA28988F08099162043F06C83A", //erc20 tokenContract
          // to: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", //erc20 polygon mainnet usdt
          data: encodedFunction,
          gas: gasToSend,
        },
      ],
    });
    await waitForTransactionConfirmation(result)

    console.log(result);

    document.getElementById("transferBtn").innerHTML = "Transfer";
  } catch (error) {
    document.getElementById("transferBtn").innerHTML = "Transfer failed";
    setInterval(() => {
      document.getElementById("transferBtn").innerHTML = "Transfer";
    }, 4000);
    console.log(error);
    console.log({ error });
  }
};

document
  .getElementById("transferBtn")
  .addEventListener("click", () => Transfer_token());

// window.onload = () => {
//   getProvider()
//     .then((provider) => {
//       console.log("key", provider.publicKey.toString());
//       localStorage.setItem("account", provider.publicKey.toString());

//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
console.log("WALLET_CONNECTED", WALLET_CONNECTED);

window.onload = () => {
  connect();
};
