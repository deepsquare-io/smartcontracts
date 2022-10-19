/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Sale, SaleInterface } from '../../../../contracts/legacy/v1.0/Sale';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IERC20Metadata',
        name: '_DPS',
        type: 'address',
      },
      {
        internalType: 'contract IERC20Metadata',
        name: '_STC',
        type: 'address',
      },
      {
        internalType: 'contract Eligibility',
        name: '_eligibility',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: '_rate',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '_minimumPurchaseSTC',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_initialSold',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'investor',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountDPS',
        type: 'uint256',
      },
    ],
    name: 'Purchase',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DPS',
    outputs: [
      {
        internalType: 'contract IERC20Metadata',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'STC',
    outputs: [
      {
        internalType: 'contract IERC20Metadata',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'close',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amountDPS',
        type: 'uint256',
      },
    ],
    name: 'convertDPStoSTC',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amountSTC',
        type: 'uint256',
      },
    ],
    name: 'convertSTCtoDPS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amountSTC',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'deliverDPS',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'eligibility',
    outputs: [
      {
        internalType: 'contract IEligibility',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimumPurchaseSTC',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amountSTC',
        type: 'uint256',
      },
    ],
    name: 'purchaseDPS',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'raised',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rate',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'remaining',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sold',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x6101206040523480156200001257600080fd5b50604051620016083803806200160883398101604081905262000035916200023d565b6200004033620001d4565b6001600160a01b0386166200009c5760405162461bcd60e51b815260206004820152601360248201527f53616c653a20746f6b656e206973207a65726f0000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038516620000f45760405162461bcd60e51b815260206004820152601860248201527f53616c653a20737461626c65636f696e206973207a65726f0000000000000000604482015260640162000093565b6001600160a01b0384166200014c5760405162461bcd60e51b815260206004820152601960248201527f53616c653a20656c69676962696c697479206973207a65726f00000000000000604482015260640162000093565b60008360ff1611620001a15760405162461bcd60e51b815260206004820152601a60248201527f53616c653a2072617465206973206e6f7420706f736974697665000000000000604482015260640162000093565b6001600160a01b0395861660805293851660a0529190931660c05260ff90921660e05261010091909152600155620002be565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200023a57600080fd5b50565b60008060008060008060c087890312156200025757600080fd5b8651620002648162000224565b6020880151909650620002778162000224565b60408801519095506200028a8162000224565b606088015190945060ff81168114620002a257600080fd5b809350506080870151915060a087015190509295509295509295565b60805160a05160c05160e05161010051611295620003736000396000818161023c01526106fa01526000818161017a015281816105e401526108d20152600081816101260152610ace0152600081816101bb0152818161055701528181610778015281816108f60152610c36015260008181610263015281816103530152818161044b015281816104db015281816106080152818161084301528181610bb901528181610d500152610e5101526112956000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063cc2d9e1811610066578063cc2d9e1814610237578063ef4e06ec1461025e578063f0ea4bfc14610285578063f2fde38b1461028d57600080fd5b8063715018a6146101f85780637f984660146102005780638da5cb5b1461021357806398a8f5031461022457600080fd5b806343d726d6116100d357806343d726d6146101ae578063542e898e146101b657806355234ec0146101dd57806355468cc0146101e557600080fd5b806302c7e7af146101055780630dc14000146101215780631dc4b1f3146101605780632c4e722e14610175575b600080fd5b61010e60015481565b6040519081526020015b60405180910390f35b6101487f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610118565b61017361016e366004610f6b565b6102a0565b005b61019c7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610118565b6101736102f0565b6101487f000000000000000000000000000000000000000000000000000000000000000081565b61010e6104c3565b61010e6101f3366004610f9b565b610553565b6101736106c2565b61017361020e366004610f9b565b6106f8565b6000546001600160a01b0316610148565b61010e610232366004610f9b565b61083f565b61010e7f000000000000000000000000000000000000000000000000000000000000000081565b6101487f000000000000000000000000000000000000000000000000000000000000000081565b61010e610995565b61017361029b366004610fb4565b6109a2565b6000546001600160a01b031633146102d35760405162461bcd60e51b81526004016102ca90610fd8565b60405180910390fd5b60006102df8284610a3d565b90506102eb8282610e14565b505050565b6000546001600160a01b0316331461031a5760405162461bcd60e51b81526004016102ca90610fd8565b60408051600481526024810182526020810180516001600160e01b0316638da5cb5b60e01b179052905160009182916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169161037d9161100d565b600060405180830381855afa9150503d80600081146103b8576040519150601f19603f3d011682016040523d82523d6000602084013e6103bd565b606091505b50915091508161040f5760405162461bcd60e51b815260206004820152601f60248201527f53616c653a20756e61626c6520746f2064657465726d696e65206f776e65720060448201526064016102ca565b6000818060200190518101906104259190611048565b6040516370a0823160e01b81523060048201529091506104bb9082906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610492573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b69190611065565b610e14565b6102eb6106c2565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561052a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054e9190611065565b905090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d79190611094565b6105e290600a6111a9565b7f000000000000000000000000000000000000000000000000000000000000000060ff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610664573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106889190611094565b61069390600a6111a9565b61069d90856111b8565b6106a89060646111b8565b6106b291906111d7565b6106bc91906111d7565b92915050565b6000546001600160a01b031633146106ec5760405162461bcd60e51b81526004016102ca90610fd8565b6106f66000610f06565b565b7f00000000000000000000000000000000000000000000000000000000000000008110156107685760405162461bcd60e51b815260206004820152601f60248201527f53616c653a20616d6f756e74206c6f776572207468616e206d696e696d756d0060448201526064016102ca565b60006107743383610a3d565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd336107b86000546001600160a01b031690565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604481018590526064016020604051808303816000875af115801561080c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083091906111f9565b5061083b3382610e14565b5050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561089f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c39190611094565b6108ce90600a6111a9565b60647f000000000000000000000000000000000000000000000000000000000000000060ff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610952573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109769190611094565b61098190600a6111a9565b61098b90866111b8565b6106a891906111b8565b600061054e60015461083f565b6000546001600160a01b031633146109cc5760405162461bcd60e51b81526004016102ca90610fd8565b6001600160a01b038116610a315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102ca565b610a3a81610f06565b50565b600080546001600160a01b03166001600160a01b0316836001600160a01b031603610aaa5760405162461bcd60e51b815260206004820181905260248201527f53616c653a20696e766573746f72206973207468652073616c65206f776e657260448201526064016102ca565b604051636a5b5aed60e11b81526001600160a01b03848116600483015260009182917f0000000000000000000000000000000000000000000000000000000000000000169063d4b6b5da9060240160408051808303816000875af1158015610b16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3a919061121b565b9150915060008260ff1611610b915760405162461bcd60e51b815260206004820152601d60248201527f53616c653a206163636f756e74206973206e6f7420656c696769626c6500000060448201526064016102ca565b6040516370a0823160e01b81526001600160a01b0386811660048301526000918691610c26917f0000000000000000000000000000000000000000000000000000000000000000909116906370a0823190602401602060405180830381865afa158015610c02573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102329190611065565b610c309190611247565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb69190611094565b610cc190600a6111a9565b610ccb90846111b8565b90508015610d235780821115610d235760405162461bcd60e51b815260206004820152601860248201527f53616c653a20657863656564732074696572206c696d6974000000000000000060448201526064016102ca565b6000610d2e87610553565b6040516370a0823160e01b815230600482015290915081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dbb9190611065565b1015610e095760405162461bcd60e51b815260206004820181905260248201527f53616c653a206e6f20656e6f75676820746f6b656e732072656d61696e696e6760448201526064016102ca565b979650505050505050565b8060016000828254610e269190611247565b909155505060405163a9059cbb60e01b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015610e9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebe91906111f9565b50816001600160a01b03167f2499a5330ab0979cc612135e7883ebc3cd5c9f7a8508f042540c34723348f63282604051610efa91815260200190565b60405180910390a25050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114610a3a57600080fd5b60008060408385031215610f7e57600080fd5b823591506020830135610f9081610f56565b809150509250929050565b600060208284031215610fad57600080fd5b5035919050565b600060208284031215610fc657600080fd5b8135610fd181610f56565b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000825160005b8181101561102e5760208186018101518583015201611014565b8181111561103d576000828501525b509190910192915050565b60006020828403121561105a57600080fd5b8151610fd181610f56565b60006020828403121561107757600080fd5b5051919050565b805160ff8116811461108f57600080fd5b919050565b6000602082840312156110a657600080fd5b610fd18261107e565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156111005781600019048211156110e6576110e66110af565b808516156110f357918102915b93841c93908002906110ca565b509250929050565b600082611117575060016106bc565b81611124575060006106bc565b816001811461113a576002811461114457611160565b60019150506106bc565b60ff841115611155576111556110af565b50506001821b6106bc565b5060208310610133831016604e8410600b8410161715611183575081810a6106bc565b61118d83836110c5565b80600019048211156111a1576111a16110af565b029392505050565b6000610fd160ff841683611108565b60008160001904831182151516156111d2576111d26110af565b500290565b6000826111f457634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561120b57600080fd5b81518015158114610fd157600080fd5b6000806040838503121561122e57600080fd5b6112378361107e565b9150602083015190509250929050565b6000821982111561125a5761125a6110af565b50019056fea26469706673582212208cc9ed2d83fddd3e75139c4464dcb2061d2c827f2032c675a3e1a70431cbee0464736f6c634300080d0033';

type SaleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: SaleConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

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
    _rate: BigNumberish,
    _minimumPurchaseSTC: BigNumberish,
    _initialSold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<Sale> {
    return super.deploy(
      _DPS,
      _STC,
      _eligibility,
      _rate,
      _minimumPurchaseSTC,
      _initialSold,
      overrides || {},
    ) as Promise<Sale>;
  }
  override getDeployTransaction(
    _DPS: string,
    _STC: string,
    _eligibility: string,
    _rate: BigNumberish,
    _minimumPurchaseSTC: BigNumberish,
    _initialSold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _DPS,
      _STC,
      _eligibility,
      _rate,
      _minimumPurchaseSTC,
      _initialSold,
      overrides || {},
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
