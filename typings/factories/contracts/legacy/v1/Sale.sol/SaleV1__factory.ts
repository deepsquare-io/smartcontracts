/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SaleV1,
  SaleV1Interface,
} from "../../../../../contracts/legacy/v1/Sale.sol/SaleV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "_DPS",
        type: "address",
      },
      {
        internalType: "contract IERC20Metadata",
        name: "_STC",
        type: "address",
      },
      {
        internalType: "contract Eligibility",
        name: "_eligibility",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_rate",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_minimumPurchaseSTC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialSold",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "investor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountDPS",
        type: "uint256",
      },
    ],
    name: "Purchase",
    type: "event",
  },
  {
    inputs: [],
    name: "DPS",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STC",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountDPS",
        type: "uint256",
      },
    ],
    name: "convertDPStoSTC",
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
        internalType: "uint256",
        name: "amountSTC",
        type: "uint256",
      },
    ],
    name: "convertSTCtoDPS",
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
        internalType: "uint256",
        name: "amountSTC",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "deliverDPS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eligibility",
    outputs: [
      {
        internalType: "contract IEligibility",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumPurchaseSTC",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amountSTC",
        type: "uint256",
      },
    ],
    name: "purchaseDPS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "raised",
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
    name: "rate",
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
    inputs: [],
    name: "remaining",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sold",
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

const _bytecode =
  "0x6101206040523480156200001257600080fd5b50604051620016ae380380620016ae83398101604081905262000035916200023d565b6200004033620001d4565b6001600160a01b0386166200009c5760405162461bcd60e51b815260206004820152601360248201527f53616c653a20746f6b656e206973207a65726f0000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038516620000f45760405162461bcd60e51b815260206004820152601860248201527f53616c653a20737461626c65636f696e206973207a65726f0000000000000000604482015260640162000093565b6001600160a01b0384166200014c5760405162461bcd60e51b815260206004820152601960248201527f53616c653a20656c69676962696c697479206973207a65726f00000000000000604482015260640162000093565b60008360ff1611620001a15760405162461bcd60e51b815260206004820152601a60248201527f53616c653a2072617465206973206e6f7420706f736974697665000000000000604482015260640162000093565b6001600160a01b0395861660805293851660a0529190931660c05260ff90921660e05261010091909152600155620002be565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200023a57600080fd5b50565b60008060008060008060c087890312156200025757600080fd5b8651620002648162000224565b6020880151909650620002778162000224565b60408801519095506200028a8162000224565b606088015190945060ff81168114620002a257600080fd5b809350506080870151915060a087015190509295509295509295565b60805160a05160c05160e0516101005161133b620003736000396000818161023c015261073601526000818161017a01528181610611015261092c0152600081816101260152610b290152600081816101bb01528181610575015281816107b4015281816109500152610caf015260008181610263015281816103530152818161044b015281816104ea015281816106350152818161088e01528181610c2301528181610dd80152610ee8015261133b6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063cc2d9e1811610066578063cc2d9e1814610237578063ef4e06ec1461025e578063f0ea4bfc14610285578063f2fde38b1461028d57600080fd5b8063715018a6146101f85780637f984660146102005780638da5cb5b1461021357806398a8f5031461022457600080fd5b806343d726d6116100d357806343d726d6146101ae578063542e898e146101b657806355234ec0146101dd57806355468cc0146101e557600080fd5b806302c7e7af146101055780630dc14000146101215780631dc4b1f3146101605780632c4e722e14610175575b600080fd5b61010e60015481565b6040519081526020015b60405180910390f35b6101487f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610118565b61017361016e366004611011565b6102a0565b005b61019c7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610118565b6101736102f0565b6101487f000000000000000000000000000000000000000000000000000000000000000081565b61010e6104d2565b61010e6101f3366004611041565b610571565b6101736106fe565b61017361020e366004611041565b610734565b6000546001600160a01b0316610148565b61010e610232366004611041565b61088a565b61010e7f000000000000000000000000000000000000000000000000000000000000000081565b6101487f000000000000000000000000000000000000000000000000000000000000000081565b61010e6109fe565b61017361029b36600461105a565b610a0b565b6000546001600160a01b031633146102d35760405162461bcd60e51b81526004016102ca9061107e565b60405180910390fd5b60006102df8284610aa6565b90506102eb8282610eab565b505050565b6000546001600160a01b0316331461031a5760405162461bcd60e51b81526004016102ca9061107e565b60408051600481526024810182526020810180516001600160e01b0316638da5cb5b60e01b179052905160009182916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169161037d916110b3565b600060405180830381855afa9150503d80600081146103b8576040519150601f19603f3d011682016040523d82523d6000602084013e6103bd565b606091505b50915091508161040f5760405162461bcd60e51b815260206004820152601f60248201527f53616c653a20756e61626c6520746f2064657465726d696e65206f776e65720060448201526064016102ca565b60008180602001905181019061042591906110ee565b6040516370a0823160e01b81523060048201529091506104ca9082906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b15801561048d57600080fd5b505afa1580156104a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c5919061110b565b610eab565b6102eb6106fe565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561053457600080fd5b505afa158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c919061110b565b905090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156105cc57600080fd5b505afa1580156105e0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610604919061113a565b61060f90600a61124f565b7f000000000000000000000000000000000000000000000000000000000000000060ff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561068c57600080fd5b505afa1580156106a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c4919061113a565b6106cf90600a61124f565b6106d9908561125e565b6106e490606461125e565b6106ee919061127d565b6106f8919061127d565b92915050565b6000546001600160a01b031633146107285760405162461bcd60e51b81526004016102ca9061107e565b6107326000610fac565b565b7f00000000000000000000000000000000000000000000000000000000000000008110156107a45760405162461bcd60e51b815260206004820152601f60248201527f53616c653a20616d6f756e74206c6f776572207468616e206d696e696d756d0060448201526064016102ca565b60006107b03383610aa6565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd336107f46000546001600160a01b031690565b6040516001600160e01b031960e085901b1681526001600160a01b0392831660048201529116602482015260448101859052606401602060405180830381600087803b15801561084357600080fd5b505af1158015610857573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087b919061129f565b506108863382610eab565b5050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156108e557600080fd5b505afa1580156108f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091d919061113a565b61092890600a61124f565b60647f000000000000000000000000000000000000000000000000000000000000000060ff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156109a757600080fd5b505afa1580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df919061113a565b6109ea90600a61124f565b6109f4908661125e565b6106e4919061125e565b600061056c60015461088a565b6000546001600160a01b03163314610a355760405162461bcd60e51b81526004016102ca9061107e565b6001600160a01b038116610a9a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102ca565b610aa381610fac565b50565b600080546001600160a01b0384811691161415610b055760405162461bcd60e51b815260206004820181905260248201527f53616c653a20696e766573746f72206973207468652073616c65206f776e657260448201526064016102ca565b604051636a5b5aed60e11b81526001600160a01b03848116600483015260009182917f0000000000000000000000000000000000000000000000000000000000000000169063d4b6b5da906024016040805180830381600087803b158015610b6c57600080fd5b505af1158015610b80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba491906112c1565b9150915060008260ff1611610bfb5760405162461bcd60e51b815260206004820152601d60248201527f53616c653a206163636f756e74206973206e6f7420656c696769626c6500000060448201526064016102ca565b6040516370a0823160e01b81526001600160a01b0386811660048301526000918691610c9f917f0000000000000000000000000000000000000000000000000000000000000000909116906370a082319060240160206040518083038186803b158015610c6757600080fd5b505afa158015610c7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610232919061110b565b610ca991906112ed565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610d0657600080fd5b505afa158015610d1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3e919061113a565b610d4990600a61124f565b610d53908461125e565b90508015610dab5780821115610dab5760405162461bcd60e51b815260206004820152601860248201527f53616c653a20657863656564732074696572206c696d6974000000000000000060448201526064016102ca565b6000610db687610571565b6040516370a0823160e01b815230600482015290915081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b158015610e1a57600080fd5b505afa158015610e2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e52919061110b565b1015610ea05760405162461bcd60e51b815260206004820181905260248201527f53616c653a206e6f20656e6f75676820746f6b656e732072656d61696e696e6760448201526064016102ca565b979650505050505050565b8060016000828254610ebd91906112ed565b909155505060405163a9059cbb60e01b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b158015610f2c57600080fd5b505af1158015610f40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f64919061129f565b50816001600160a01b03167f2499a5330ab0979cc612135e7883ebc3cd5c9f7a8508f042540c34723348f63282604051610fa091815260200190565b60405180910390a25050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114610aa357600080fd5b6000806040838503121561102457600080fd5b82359150602083013561103681610ffc565b809150509250929050565b60006020828403121561105357600080fd5b5035919050565b60006020828403121561106c57600080fd5b813561107781610ffc565b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000825160005b818110156110d457602081860181015185830152016110ba565b818111156110e3576000828501525b509190910192915050565b60006020828403121561110057600080fd5b815161107781610ffc565b60006020828403121561111d57600080fd5b5051919050565b805160ff8116811461113557600080fd5b919050565b60006020828403121561114c57600080fd5b61107782611124565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156111a657816000190482111561118c5761118c611155565b8085161561119957918102915b93841c9390800290611170565b509250929050565b6000826111bd575060016106f8565b816111ca575060006106f8565b81600181146111e057600281146111ea57611206565b60019150506106f8565b60ff8411156111fb576111fb611155565b50506001821b6106f8565b5060208310610133831016604e8410600b8410161715611229575081810a6106f8565b611233838361116b565b806000190482111561124757611247611155565b029392505050565b600061107760ff8416836111ae565b600081600019048311821515161561127857611278611155565b500290565b60008261129a57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156112b157600080fd5b8151801515811461107757600080fd5b600080604083850312156112d457600080fd5b6112dd83611124565b9150602083015190509250929050565b6000821982111561130057611300611155565b50019056fea26469706673582212202eceb80859ef839f6f8953b1b11711ad7fbe6b5e05be4f324622b64badd8d89364736f6c63430008090033";

type SaleV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaleV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SaleV1__factory extends ContractFactory {
  constructor(...args: SaleV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _DPS: string,
    _STC: string,
    _eligibility: string,
    _rate: BigNumberish,
    _minimumPurchaseSTC: BigNumberish,
    _initialSold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SaleV1> {
    return super.deploy(
      _DPS,
      _STC,
      _eligibility,
      _rate,
      _minimumPurchaseSTC,
      _initialSold,
      overrides || {}
    ) as Promise<SaleV1>;
  }
  override getDeployTransaction(
    _DPS: string,
    _STC: string,
    _eligibility: string,
    _rate: BigNumberish,
    _minimumPurchaseSTC: BigNumberish,
    _initialSold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _DPS,
      _STC,
      _eligibility,
      _rate,
      _minimumPurchaseSTC,
      _initialSold,
      overrides || {}
    );
  }
  override attach(address: string): SaleV1 {
    return super.attach(address) as SaleV1;
  }
  override connect(signer: Signer): SaleV1__factory {
    return super.connect(signer) as SaleV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaleV1Interface {
    return new utils.Interface(_abi) as SaleV1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SaleV1 {
    return new Contract(address, _abi, signerOrProvider) as SaleV1;
  }
}
