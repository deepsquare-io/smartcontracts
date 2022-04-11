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
import type { Sale, SaleInterface } from "../../contracts/Sale";

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
        internalType: "contract AggregatorV3Interface",
        name: "_aggregator",
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
    name: "aggregator",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
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
        name: "amountAVAX",
        type: "uint256",
      },
    ],
    name: "convertAVAXtoSTC",
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
    inputs: [],
    name: "purchaseDPSWithAVAX",
    outputs: [],
    stateMutability: "payable",
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
    name: "purchaseDPSWithSTC",
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
    inputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "newAggregator",
        type: "address",
      },
    ],
    name: "setAggregator",
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
  "0x6101206040523480156200001257600080fd5b5060405162001b9538038062001b958339810160408190526200003591620002ad565b620000403362000244565b6001600160a01b0387166200009c5760405162461bcd60e51b815260206004820152601360248201527f53616c653a20746f6b656e206973207a65726f0000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038616620000f45760405162461bcd60e51b815260206004820152601860248201527f53616c653a20737461626c65636f696e206973207a65726f0000000000000000604482015260640162000093565b6001600160a01b0385166200014c5760405162461bcd60e51b815260206004820152601960248201527f53616c653a20656c69676962696c697479206973207a65726f00000000000000604482015260640162000093565b6001600160a01b038416620001a45760405162461bcd60e51b815260206004820152601860248201527f53616c653a2061676772656761746f72206973207a65726f0000000000000000604482015260640162000093565b60008360ff1611620001f95760405162461bcd60e51b815260206004820152601a60248201527f53616c653a2072617465206973206e6f7420706f736974697665000000000000604482015260640162000093565b6001600160a01b0396871660805294861660a05292851660c052600180546001600160a01b031916929095169190911790935560ff90921660e0526101009190915260025562000345565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620002aa57600080fd5b50565b600080600080600080600060e0888a031215620002c957600080fd5b8751620002d68162000294565b6020890151909750620002e98162000294565b6040890151909650620002fc8162000294565b60608901519095506200030f8162000294565b608089015190945060ff811681146200032757600080fd5b8093505060a0880151915060c0880151905092959891949750929550565b60805160a05160c05160e051610100516117946200040160003960008181610344015281816104490152610ca101526000818161020d015281816107c1015261098401526000818161015f0152610f52015260008181610268015281816104c701528181610725015281816109a801528181610bd301526110d8015260008181610380015281816105f10152818161069a015281816107e5015281816108e60152818161104c01528181611201015261131101526117946000f3fe60806040526004361061011f5760003560e01c8063715018a6116100a0578063cdc8886611610064578063cdc8886614610366578063ef4e06ec1461036e578063f0ea4bfc146103a2578063f2fde38b146103b7578063f9120af6146103d757600080fd5b8063715018a6146102bf5780638da5cb5b146102d457806398a8f503146102f2578063c672714914610312578063cc2d9e181461033257600080fd5b80632c4e722e116100e75780632c4e722e146101fb57806343d726d614610241578063542e898e1461025657806355234ec01461028a57806355468cc01461029f57600080fd5b806302c7e7af146101245780630dc140001461014d5780631dc4b1f314610199578063245a7bfc146101bb57806324e53901146101db575b600080fd5b34801561013057600080fd5b5061013a60025481565b6040519081526020015b60405180910390f35b34801561015957600080fd5b506101817f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610144565b3480156101a557600080fd5b506101b96101b436600461143a565b6103f7565b005b3480156101c757600080fd5b50600154610181906001600160a01b031681565b3480156101e757600080fd5b506101b96101f636600461146a565b610447565b34801561020757600080fd5b5061022f7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610144565b34801561024d57600080fd5b506101b961059d565b34801561026257600080fd5b506101817f000000000000000000000000000000000000000000000000000000000000000081565b34801561029657600080fd5b5061013a610682565b3480156102ab57600080fd5b5061013a6102ba36600461146a565b610721565b3480156102cb57600080fd5b506101b96108ae565b3480156102e057600080fd5b506000546001600160a01b0316610181565b3480156102fe57600080fd5b5061013a61030d36600461146a565b6108e2565b34801561031e57600080fd5b5061013a61032d36600461146a565b610a56565b34801561033e57600080fd5b5061013a7f000000000000000000000000000000000000000000000000000000000000000081565b6101b9610c92565b34801561037a57600080fd5b506101817f000000000000000000000000000000000000000000000000000000000000000081565b3480156103ae57600080fd5b5061013a610ddb565b3480156103c357600080fd5b506101b96103d2366004611483565b610de8565b3480156103e357600080fd5b506101b96103f2366004611483565b610e83565b6000546001600160a01b0316331461042a5760405162461bcd60e51b8152600401610421906114a0565b60405180910390fd5b60006104368284610ecf565b905061044282826112d4565b505050565b7f00000000000000000000000000000000000000000000000000000000000000008110156104b75760405162461bcd60e51b815260206004820152601f60248201527f53616c653a20616d6f756e74206c6f776572207468616e206d696e696d756d006044820152606401610421565b60006104c33383610ecf565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd336105076000546001600160a01b031690565b6040516001600160e01b031960e085901b1681526001600160a01b0392831660048201529116602482015260448101859052606401602060405180830381600087803b15801561055657600080fd5b505af115801561056a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058e91906114d5565b5061059933826112d4565b5050565b6000546001600160a01b031633146105c75760405162461bcd60e51b8152600401610421906114a0565b6106786105dc6000546001600160a01b031690565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561063b57600080fd5b505afa15801561064f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067391906114f7565b6112d4565b6106806108ae565b565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b1580156106e457600080fd5b505afa1580156106f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071c91906114f7565b905090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561077c57600080fd5b505afa158015610790573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b49190611526565b6107bf90600a61163b565b7f000000000000000000000000000000000000000000000000000000000000000060ff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561083c57600080fd5b505afa158015610850573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108749190611526565b61087f90600a61163b565b610889908561164a565b61089490606461164a565b61089e9190611669565b6108a89190611669565b92915050565b6000546001600160a01b031633146108d85760405162461bcd60e51b8152600401610421906114a0565b61068060006113d5565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561093d57600080fd5b505afa158015610951573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109759190611526565b61098090600a61163b565b60647f000000000000000000000000000000000000000000000000000000000000000060ff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156109ff57600080fd5b505afa158015610a13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a379190611526565b610a4290600a61163b565b610a4c908661164a565b610894919061164a565b600080600160009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b158015610aa757600080fd5b505afa158015610abb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adf91906116a5565b50505091505060008113610b355760405162461bcd60e51b815260206004820152601f60248201527f53616c653a20616e737765722063616e6e6f74206265206e65676174697665006044820152606401610421565b600160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610b8357600080fd5b505afa158015610b97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbb9190611526565b610bc69060126116f5565b610bd190600a61163b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610c2a57600080fd5b505afa158015610c3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c629190611526565b610c6d90600a61163b565b610c77838661164a565b610c81919061164a565b610c8b9190611669565b9392505050565b6000610c9d34610a56565b90507f0000000000000000000000000000000000000000000000000000000000000000811015610d0f5760405162461bcd60e51b815260206004820152601f60248201527f53616c653a20616d6f756e74206c6f776572207468616e206d696e696d756d006044820152606401610421565b6000610d1b3383610ecf565b90506000610d316000546001600160a01b031690565b6001600160a01b03163460405160006040518083038185875af1925050503d8060008114610d7b576040519150601f19603f3d011682016040523d82523d6000602084013e610d80565b606091505b5050905080610dd15760405162461bcd60e51b815260206004820152601c60248201527f53616c653a206661696c656420746f20666f72776172642041564158000000006044820152606401610421565b61044233836112d4565b600061071c6002546108e2565b6000546001600160a01b03163314610e125760405162461bcd60e51b8152600401610421906114a0565b6001600160a01b038116610e775760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610421565b610e80816113d5565b50565b6000546001600160a01b03163314610ead5760405162461bcd60e51b8152600401610421906114a0565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b0384811691161415610f2e5760405162461bcd60e51b815260206004820181905260248201527f53616c653a20696e766573746f72206973207468652073616c65206f776e65726044820152606401610421565b604051636a5b5aed60e11b81526001600160a01b03848116600483015260009182917f0000000000000000000000000000000000000000000000000000000000000000169063d4b6b5da906024016040805180830381600087803b158015610f9557600080fd5b505af1158015610fa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcd919061171a565b9150915060008260ff16116110245760405162461bcd60e51b815260206004820152601d60248201527f53616c653a206163636f756e74206973206e6f7420656c696769626c650000006044820152606401610421565b6040516370a0823160e01b81526001600160a01b03868116600483015260009186916110c8917f0000000000000000000000000000000000000000000000000000000000000000909116906370a082319060240160206040518083038186803b15801561109057600080fd5b505afa1580156110a4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030d91906114f7565b6110d29190611746565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561112f57600080fd5b505afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611526565b61117290600a61163b565b61117c908461164a565b905080156111d457808211156111d45760405162461bcd60e51b815260206004820152601860248201527f53616c653a20657863656564732074696572206c696d697400000000000000006044820152606401610421565b60006111df87610721565b6040516370a0823160e01b815230600482015290915081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b15801561124357600080fd5b505afa158015611257573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127b91906114f7565b10156112c95760405162461bcd60e51b815260206004820181905260248201527f53616c653a206e6f20656e6f75676820746f6b656e732072656d61696e696e676044820152606401610421565b979650505050505050565b80600260008282546112e69190611746565b909155505060405163a9059cbb60e01b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561135557600080fd5b505af1158015611369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138d91906114d5565b50816001600160a01b03167f2499a5330ab0979cc612135e7883ebc3cd5c9f7a8508f042540c34723348f632826040516113c991815260200190565b60405180910390a25050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114610e8057600080fd5b6000806040838503121561144d57600080fd5b82359150602083013561145f81611425565b809150509250929050565b60006020828403121561147c57600080fd5b5035919050565b60006020828403121561149557600080fd5b8135610c8b81611425565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602082840312156114e757600080fd5b81518015158114610c8b57600080fd5b60006020828403121561150957600080fd5b5051919050565b805160ff8116811461152157600080fd5b919050565b60006020828403121561153857600080fd5b610c8b82611510565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561159257816000190482111561157857611578611541565b8085161561158557918102915b93841c939080029061155c565b509250929050565b6000826115a9575060016108a8565b816115b6575060006108a8565b81600181146115cc57600281146115d6576115f2565b60019150506108a8565b60ff8411156115e7576115e7611541565b50506001821b6108a8565b5060208310610133831016604e8410600b8410161715611615575081810a6108a8565b61161f8383611557565b806000190482111561163357611633611541565b029392505050565b6000610c8b60ff84168361159a565b600081600019048311821515161561166457611664611541565b500290565b60008261168657634e487b7160e01b600052601260045260246000fd5b500490565b805169ffffffffffffffffffff8116811461152157600080fd5b600080600080600060a086880312156116bd57600080fd5b6116c68661168b565b94506020860151935060408601519250606086015191506116e96080870161168b565b90509295509295909350565b600060ff821660ff84168060ff0382111561171257611712611541565b019392505050565b6000806040838503121561172d57600080fd5b61173683611510565b9150602083015190509250929050565b6000821982111561175957611759611541565b50019056fea2646970667358221220558165922047f74f26c0435e195d38dc9cf04b60292bdaf3e054b8c80dd8fdf264736f6c63430008090033";

type SaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Sale__factory extends ContractFactory {
  constructor(...args: SaleConstructorParams) {
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
    _aggregator: string,
    _rate: BigNumberish,
    _minimumPurchaseSTC: BigNumberish,
    _initialSold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Sale> {
    return super.deploy(
      _DPS,
      _STC,
      _eligibility,
      _aggregator,
      _rate,
      _minimumPurchaseSTC,
      _initialSold,
      overrides || {}
    ) as Promise<Sale>;
  }
  override getDeployTransaction(
    _DPS: string,
    _STC: string,
    _eligibility: string,
    _aggregator: string,
    _rate: BigNumberish,
    _minimumPurchaseSTC: BigNumberish,
    _initialSold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _DPS,
      _STC,
      _eligibility,
      _aggregator,
      _rate,
      _minimumPurchaseSTC,
      _initialSold,
      overrides || {}
    );
  }
  override attach(address: string): Sale {
    return super.attach(address) as Sale;
  }
  override connect(signer: Signer): Sale__factory {
    return super.connect(signer) as Sale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaleInterface {
    return new utils.Interface(_abi) as SaleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Sale {
    return new Contract(address, _abi, signerOrProvider) as Sale;
  }
}
