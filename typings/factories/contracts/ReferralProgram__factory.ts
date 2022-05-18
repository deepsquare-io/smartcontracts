/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { ReferralProgram, ReferralProgramInterface } from '../../contracts/ReferralProgram';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IERC20Metadata',
        name: '_DPS',
        type: 'address',
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
    inputs: [
      {
        internalType: 'address[]',
        name: 'recipients',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'deliver',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'destruct',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
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
  '0x60806040523480156200001157600080fd5b50604051620012d7380380620012d78339818101604052810190620000379190620001e9565b620000576200004b6200009f60201b60201c565b620000a760201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200021b565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200019d8262000170565b9050919050565b6000620001b18262000190565b9050919050565b620001c381620001a4565b8114620001cf57600080fd5b50565b600081519050620001e381620001b8565b92915050565b6000602082840312156200020257620002016200016b565b5b60006200021284828501620001d2565b91505092915050565b6110ac806200022b6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632b68b9c614610067578063715018a6146100715780638da5cb5b1461007b5780639da5e83214610099578063ef4e06ec146100c9578063f2fde38b146100e7575b600080fd5b61006f610103565b005b610079610306565b005b61008361038e565b6040516100909190610835565b60405180910390f35b6100b360048036038101906100ae9190610ae2565b6103b7565b6040516100c09190610b75565b60405180910390f35b6100d161060a565b6040516100de9190610bef565b60405180910390f35b61010160048036038101906100fc9190610c0a565b610630565b005b61010b610728565b73ffffffffffffffffffffffffffffffffffffffff1661012961038e565b73ffffffffffffffffffffffffffffffffffffffff161461017f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017690610c94565b60405180910390fd5b600061018961038e565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102259190610835565b60206040518083038186803b15801561023d57600080fd5b505afa158015610251573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102759190610cc9565b6040518363ffffffff1660e01b8152600401610292929190610d05565b602060405180830381600087803b1580156102ac57600080fd5b505af11580156102c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e49190610d5a565b506102ed610306565b8073ffffffffffffffffffffffffffffffffffffffff16ff5b61030e610728565b73ffffffffffffffffffffffffffffffffffffffff1661032c61038e565b73ffffffffffffffffffffffffffffffffffffffff1614610382576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037990610c94565b60405180910390fd5b61038c6000610730565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006103c1610728565b73ffffffffffffffffffffffffffffffffffffffff166103df61038e565b73ffffffffffffffffffffffffffffffffffffffff1614610435576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042c90610c94565b60405180910390fd5b60008351141561047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190610df9565b60405180910390fd5b81518351146104be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b590610e8b565b60405180910390fd5b60005b83518110156105ff57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85838151811061051b5761051a610eab565b5b602002602001015185848151811061053657610535610eab565b5b60200260200101516040518363ffffffff1660e01b815260040161055b929190610d05565b602060405180830381600087803b15801561057557600080fd5b505af1158015610589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ad9190610d5a565b6105ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e390610f4c565b60405180910390fd5b80806105f790610f9b565b9150506104c1565b506001905092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610638610728565b73ffffffffffffffffffffffffffffffffffffffff1661065661038e565b73ffffffffffffffffffffffffffffffffffffffff16146106ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a390610c94565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561071c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071390611056565b60405180910390fd5b61072581610730565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061081f826107f4565b9050919050565b61082f81610814565b82525050565b600060208201905061084a6000830184610826565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108b282610869565b810181811067ffffffffffffffff821117156108d1576108d061087a565b5b80604052505050565b60006108e4610850565b90506108f082826108a9565b919050565b600067ffffffffffffffff8211156109105761090f61087a565b5b602082029050602081019050919050565b600080fd5b61092f81610814565b811461093a57600080fd5b50565b60008135905061094c81610926565b92915050565b6000610965610960846108f5565b6108da565b9050808382526020820190506020840283018581111561098857610987610921565b5b835b818110156109b1578061099d888261093d565b84526020840193505060208101905061098a565b5050509392505050565b600082601f8301126109d0576109cf610864565b5b81356109e0848260208601610952565b91505092915050565b600067ffffffffffffffff821115610a0457610a0361087a565b5b602082029050602081019050919050565b6000819050919050565b610a2881610a15565b8114610a3357600080fd5b50565b600081359050610a4581610a1f565b92915050565b6000610a5e610a59846109e9565b6108da565b90508083825260208201905060208402830185811115610a8157610a80610921565b5b835b81811015610aaa5780610a968882610a36565b845260208401935050602081019050610a83565b5050509392505050565b600082601f830112610ac957610ac8610864565b5b8135610ad9848260208601610a4b565b91505092915050565b60008060408385031215610af957610af861085a565b5b600083013567ffffffffffffffff811115610b1757610b1661085f565b5b610b23858286016109bb565b925050602083013567ffffffffffffffff811115610b4457610b4361085f565b5b610b5085828601610ab4565b9150509250929050565b60008115159050919050565b610b6f81610b5a565b82525050565b6000602082019050610b8a6000830184610b66565b92915050565b6000819050919050565b6000610bb5610bb0610bab846107f4565b610b90565b6107f4565b9050919050565b6000610bc782610b9a565b9050919050565b6000610bd982610bbc565b9050919050565b610be981610bce565b82525050565b6000602082019050610c046000830184610be0565b92915050565b600060208284031215610c2057610c1f61085a565b5b6000610c2e8482850161093d565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610c7e602083610c37565b9150610c8982610c48565b602082019050919050565b60006020820190508181036000830152610cad81610c71565b9050919050565b600081519050610cc381610a1f565b92915050565b600060208284031215610cdf57610cde61085a565b5b6000610ced84828501610cb4565b91505092915050565b610cff81610a15565b82525050565b6000604082019050610d1a6000830185610826565b610d276020830184610cf6565b9392505050565b610d3781610b5a565b8114610d4257600080fd5b50565b600081519050610d5481610d2e565b92915050565b600060208284031215610d7057610d6f61085a565b5b6000610d7e84828501610d45565b91505092915050565b7f526566657272616c50726f6772616d3a20726563697069656e74206c656e677460008201527f68206973207a65726f0000000000000000000000000000000000000000000000602082015250565b6000610de3602983610c37565b9150610dee82610d87565b604082019050919050565b60006020820190508181036000830152610e1281610dd6565b9050919050565b7f526566657272616c50726f6772616d3a20617267756d656e74732073697a652060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b6000610e75602883610c37565b9150610e8082610e19565b604082019050919050565b60006020820190508181036000830152610ea481610e68565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f526566657272616c50726f6772616d3a20445053207472616e7366657220666160008201527f696c656400000000000000000000000000000000000000000000000000000000602082015250565b6000610f36602483610c37565b9150610f4182610eda565b604082019050919050565b60006020820190508181036000830152610f6581610f29565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fa682610a15565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610fd957610fd8610f6c565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611040602683610c37565b915061104b82610fe4565b604082019050919050565b6000602082019050818103600083015261106f81611033565b905091905056fea2646970667358221220a64e6cfb413bbe7c79c206213cfa9950d13123159a8f3ec158cb400a64a077ba64736f6c63430008090033';

type ReferralProgramConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ReferralProgramConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class ReferralProgram__factory extends ContractFactory {
  constructor(...args: ReferralProgramConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(_DPS: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ReferralProgram> {
    return super.deploy(_DPS, overrides || {}) as Promise<ReferralProgram>;
  }
  override getDeployTransaction(
    _DPS: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_DPS, overrides || {});
  }
  override attach(address: string): ReferralProgram {
    return super.attach(address) as ReferralProgram;
  }
  override connect(signer: Signer): ReferralProgram__factory {
    return super.connect(signer) as ReferralProgram__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReferralProgramInterface {
    return new utils.Interface(_abi) as ReferralProgramInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ReferralProgram {
    return new Contract(address, _abi, signerOrProvider) as ReferralProgram;
  }
}
